
import { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useCarrinho } from "../../context/CarrinhoContext";
import "./roupa.css";

const produtos = [
  {
    id: 1,
    nome: "Legging Fitness",
    descricao: "Conforto e liberdade para treinar.",
    preco: 89.9,
    imagem: "/imagens/legging.png",
  },
  {
    id: 2,
    nome: "Top Fitness",
    descricao: "Leve e confortável para seus treinos.",
    preco: 49.9,
    imagem: "/imagens/top.png",
  },
  {
    id: 3,
    nome: "Polaina Fitness",
    descricao: "Estilo e conforto para seu look.",
    preco: 39.9,
    imagem: "/imagens/polaina.png",
  },
];

export default function Roupa() {
  const [favoritos, setFavoritos] = useState([]);
  const { adicionarCarrinho } = useCarrinho();

  function alternarFavorito(id) {
    setFavoritos((atuais) =>
      atuais.includes(id)
        ? atuais.filter((item) => item !== id)
        : [...atuais, id]
    );
  }

  // Adiciona o produto ao carrinho e mostra a notificação
  function adicionarComNotificacao(produto) {
    adicionarCarrinho(produto);
    window.alert("Adicionado ao carrinho!");
  }

  return (
    <div className="roupa">
      <div className="produtos-grid">
        {produtos.map((produto) => (
          <article className="produto-card" key={produto.id}>
            <button
              type="button"
              className={`favorito ${
                favoritos.includes(produto.id) ? "ativo" : ""
              }`}
              onClick={() => alternarFavorito(produto.id)}
              aria-label={
                favoritos.includes(produto.id)
                  ? "Remover dos favoritos"
                  : "Adicionar aos favoritos"
              }
            >
              <FaHeart />
            </button>

            <img
              src={produto.imagem}
              alt={produto.nome}
              onError={(e) => {
                e.currentTarget.style.visibility = "hidden";
              }}
            />

            <h3>{produto.nome}</h3>
            <p>{produto.descricao}</p>

            <strong>
              {produto.preco.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </strong>

            <button
              type="button"
              className="comprar"
              onClick={() => adicionarComNotificacao(produto)}
            >
              Comprar agora
            </button>

            <button
              type="button"
              className="adicionar"
              onClick={() => adicionarComNotificacao(produto)}
            >
              <FaShoppingCart /> Adicionar ao carrinho
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
