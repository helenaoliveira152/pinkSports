
import { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useCarrinho } from "../context/CarrinhoContext";

export default function ProdutoCard({ produto }) {
  const [favorito, setFavorito] = useState(false);
  const { adicionarCarrinho } = useCarrinho();

  function adicionarAoCarrinho() {
    adicionarCarrinho(produto);
  }

  function comprarAgora() {
    // Ação de compra será conectada ao checkout depois.
  }

  return (
    <article className="produto-card">
      <button
        type="button"
        className={`favorito ${favorito ? "ativo" : ""}`}
        onClick={() => setFavorito(!favorito)}
        aria-label={
          favorito ? "Remover dos favoritos" : "Adicionar aos favoritos"
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
        onClick={comprarAgora}
      >
        Comprar agora
      </button>

      <button
        type="button"
        className="adicionar"
        onClick={adicionarAoCarrinho}
      >
        <FaShoppingCart /> Adicionar ao carrinho
      </button>
    </article>
  );
}
