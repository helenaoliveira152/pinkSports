import ProdutoCard from "../ProdutoCard/ProdutoCard.jsx";
import { useFavoritos } from "../../context/FavoritosContext.jsx";
import "./Favoritos.css";

export default function Favoritos() {
  const { favoritos } = useFavoritos();

  if (favoritos.length === 0) {
    return (
      <div className="favoritos-vazio">
        <h3>❤️ Nenhum produto favoritado</h3>

        <p>
          Clique no coração dos produtos para adicioná-los
          aos seus favoritos.
        </p>
      </div>
    );
  }

  return (
    <div className="favoritos">
      <div className="produtos-grid">
        {favoritos.map((produto) => (
          <ProdutoCard
            key={produto.id}
            produto={produto}
          />
        ))}
      </div>
    </div>
  );
}