
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CarrinhoContext = createContext(null);

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState(() => {
    try {
      const salvo = localStorage.getItem("pinksport-carrinho");
      return salvo ? JSON.parse(salvo) : [];
    } catch {
      return [];
    }
  });

  // Salva o carrinho no navegador sempre que ele mudar
  useEffect(() => {
    try {
      localStorage.setItem(
        "pinksport-carrinho",
        JSON.stringify(carrinho)
      );
    } catch (erro) {
      console.error("Erro ao salvar o carrinho:", erro);
    }
  }, [carrinho]);

  // Adiciona um produto ou aumenta sua quantidade
  function adicionarCarrinho(produto) {
    setCarrinho((atuais) => {
      const existente = atuais.find(
        (item) => item.id === produto.id
      );

      if (existente) {
        return atuais.map((item) =>
          item.id === produto.id
            ? {
                ...item,
                quantidade: (item.quantidade || 1) + 1,
              }
            : item
        );
      }

      return [
        ...atuais,
        {
          ...produto,
          quantidade: 1,
        },
      ];
    });
  }

  // Remove um produto do carrinho
  function removerCarrinho(id) {
    setCarrinho((atuais) =>
      atuais.filter((item) => item.id !== id)
    );
  }

  // Altera a quantidade de um produto
  function alterarQuantidade(id, quantidade) {
    if (!Number.isInteger(quantidade) || quantidade < 1) {
      return;
    }

    setCarrinho((atuais) =>
      atuais.map((item) =>
        item.id === id
          ? { ...item, quantidade }
          : item
      )
    );
  }

  // Calcula a quantidade total de unidades
  const quantidadeTotal = carrinho.reduce(
    (total, item) => total + (item.quantidade || 1),
    0
  );

  // Calcula o preço total dos produtos
  const totalCarrinho = carrinho.reduce(
    (total, item) =>
      total + item.preco * (item.quantidade || 1),
    0
  );

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        adicionarCarrinho,
        removerCarrinho,
        alterarQuantidade,
        quantidadeTotal,
        totalCarrinho,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  const contexto = useContext(CarrinhoContext);

  if (!contexto) {
    throw new Error(
      "useCarrinho precisa estar dentro de CarrinhoProvider"
    );
  }

  return contexto;
}

export default CarrinhoProvider;
