
import {
  FaTrash,
  FaMinus,
  FaPlus,
} from "react-icons/fa";

import { useCarrinho } from "../../context/CarrinhoContext";
import "./carrinho.css";

export default function Carrinho() {
  const {
    carrinho,
    removerCarrinho,
    alterarQuantidade,
    totalCarrinho,
  } = useCarrinho();

  function formatarPreco(valor) {
    return Number(valor).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <div className="carrinho-conteudo">
      {carrinho.length === 0 ? (
        <div className="carrinho-vazio">
          <p>Seu carrinho está vazio.</p>
          <span>Adicione suas peças favoritas!</span>
        </div>
      ) : (
        <>
          {carrinho.map((produto) => (
            <article
              className="item-carrinho"
              key={produto.id}
            >
              <img
                src={produto.imagem}
                alt={produto.nome}
              />

              <div className="detalhes-carrinho">
                <h3>{produto.nome}</h3>

                <p>
                  Preço unitário: {formatarPreco(produto.preco)}
                </p>

                <strong>
                  Subtotal:{" "}
                  {formatarPreco(
                    Number(produto.preco) *
                      (produto.quantidade || 1)
                  )}
                </strong>

                <div className="quantidade-controle">
                  <button
                    onClick={() =>
                      alterarQuantidade(
                        produto.id,
                        (produto.quantidade || 1) - 1
                      )
                    }
                    disabled={(produto.quantidade || 1) <= 1}
                  >
                    <FaMinus />
                  </button>

                  <span>{produto.quantidade || 1}</span>

                  <button
                    onClick={() =>
                      alterarQuantidade(
                        produto.id,
                        (produto.quantidade || 1) + 1
                      )
                    }
                  >
                    <FaPlus />
                  </button>

                  <button
                    className="remover-carrinho"
                    onClick={() =>
                      removerCarrinho(produto.id)
                    }
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </article>
          ))}

          <div className="total-carrinho">
            <h2>Total: {formatarPreco(totalCarrinho)}</h2>

            <p>
              {carrinho.reduce(
                (soma, produto) =>
                  soma + (produto.quantidade || 1),
                0
              )}{" "}
              unidade(s) no carrinho
            </p>
          </div>
        </>
      )}
    </div>
  );
}
