import { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import "./academia.css";

const produtos = [
  {
    id: 1,
    nome: "Tênis Fit",
    descricao: "Fofo e Confortável para treinar.",
    preco: 189.90,
    imagem: "/imagens/tenisfit.png",
  },
  {
    id: 2,
    nome: "Tênis Esporte",
    descricao: "Leve e macio para seus treinos.",
    preco: 349.90,
    imagem: "/imagens/tenisesporte.png",
  },
  {
    id: 3,
    nome: "Tênis Fitness",
    descricao: "Beleza e conforto para seu look.",
    preco: 239.90,
    imagem: "/imagens/tenisfitness.png",
  },
];

export default function Calcados() {
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
