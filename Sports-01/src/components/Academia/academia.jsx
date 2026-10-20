
import { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import "./academia.css";

const produtos = [
  {
    id: 1,
    nome: "Legging Fitness",
    descricao: "Conforto e liberdade para treinar.",
    preco: 89.90,
    imagem: "/imagens/legging.png",
  },
  {
    id: 2,
    nome: "Top Fitness",
    descricao: "Leve e confortável para seus treinos.",
    preco: 49.90,
    imagem: "/imagens/top.png",
  },
  {
    id: 3,
    nome: "Polaina Fitness",
    descricao: "Estilo e conforto para seu look.",
    preco: 39.90,
    imagem: "/imagens/polaina.png",
  },
];

export default function Academia() {
  const [favoritos, setFavoritos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);

  function alternarFavorito(id) {
    setFavoritos((atuais) =>
      atuais.includes(id)
        ? atuais.filter((item) => item !== id)
        : [...atuais, id]
    );
  }

  function adicionarCarrinho(produto) {
    setCarrinho((atuais) => [...atuais, produto]);
  }

  function comprarAgora(produto) {
    adicionarCarrinho(produto);
    alert(`"${produto.nome}" foi adicionado ao carrinho!`);
  }

  return (
    <div className="academia">
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
              onClick={() => comprarAgora(produto)}
            >
              Comprar agora
            </button>

            <button
              type="button"
              className="adicionar"
              onClick={() => adicionarCarrinho(produto)}
            >
              <FaShoppingCart /> Adicionar ao carrinho
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
