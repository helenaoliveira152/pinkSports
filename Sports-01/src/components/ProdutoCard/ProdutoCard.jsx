import { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

import { useCarrinho } from "../../context/CarrinhoContext.jsx";
import { useFavoritos } from "../../context/FavoritosContext.jsx";

import "./ProdutoCard.css";

export default function ProdutoCard({ produto }) {
  const { adicionarCarrinho } = useCarrinho();

  const {
    alternarFavorito,
    favoritoExiste,
  } = useFavoritos();

  const [mostrarMensagem, setMostrarMensagem] = useState(false);

  function adicionarAoCarrinho() {
    adicionarCarrinho(produto);

    setMostrarMensagem(true);

    setTimeout(() => {
      setMostrarMensagem(false);
    }, 2500);
  }

  function comprarAgora() {
    adicionarCarrinho(produto);

    alert("Produto adicionado ao carrinho!");
  }

  const favorito = favoritoExiste(produto.id);

  return (
    <>
      {mostrarMensagem && (
        <div className="notificacao">
          <span>
            O produto foi colocado no carrinho com sucesso! ❤️
          </span>

          <button
            onClick={() => setMostrarMensagem(false)}
          >
            ×
          </button>
        </div>
      )}

      <article className="produto-card">

        <button
          type="button"
          className={`favorito ${favorito ? "ativo" : ""}`}
          onClick={() => alternarFavorito(produto)}
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
          onClick={comprarAgora}
        >
          Comprar agora
        </button>

        <button
          type="button"
          className="adicionar"
          onClick={adicionarAoCarrinho}
        >
          <FaShoppingCart />
          Adicionar ao carrinho
        </button>

      </article>
    </>
  );
}