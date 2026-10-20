
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

const categorias = [
  "Todas as categorias",
  "Roupas",
  "Calçados",
  "Acessórios",
  "Academia",
  "Esportes",
  "Ao ar livre",
  "Promoções",
];

export default function SearchBar({ onSearch }) {
  const [busca, setBusca] = useState("");
  const [mostrarResultados, setMostrarResultados] = useState(false);

  function normalizar(texto) {
    return texto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  }

  const resultados = categorias.filter((categoria) =>
    normalizar(categoria).includes(normalizar(busca))
  );

  function pesquisar(e) {
    e.preventDefault();

    if (!busca.trim()) {
      setMostrarResultados(true);
      return;
    }

    onSearch?.(busca.trim());
    setMostrarResultados(false);
  }

  function selecionarCategoria(categoria) {
    setBusca(categoria);
    setMostrarResultados(false);
    onSearch?.(categoria);
  }

  function fecharBusca() {
    setMostrarResultados(false);
  }

  return (
    <div className="search-wrapper">
      <form className="search-bar" onSubmit={pesquisar}>
        <input
          type="search"
          placeholder="O que você está procurando?"
          value={busca}
          onChange={(e) => {
            setBusca(e.target.value);
            setMostrarResultados(true);
          }}
          onFocus={() => setMostrarResultados(true)}
          aria-label="Pesquisar categorias"
        />

        <button type="submit" aria-label="Pesquisar">
          <FaSearch />
        </button>
      </form>

      {mostrarResultados && (
        <div className="search-results">
          <button
            type="button"
            className="search-close"
            onClick={fecharBusca}
            aria-label="Fechar sugestões"
            title="Fechar"
          >
            ×
          </button>

          {resultados.length > 0 ? (
            resultados.map((categoria) => (
              <button
                type="button"
                key={categoria}
                className="search-result-item"
                onClick={() => selecionarCategoria(categoria)}
              >
                {categoria}
              </button>
            ))
          ) : (
            <p className="search-empty">
              Nenhuma categoria encontrada.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
