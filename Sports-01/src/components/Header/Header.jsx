
import { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import "./Header.css";
import {
  FaHeart,
  FaShoppingCart,
  FaBars,
} from "react-icons/fa";

export default function Header({ onNavigate }) {
  const [filtrosAbertos, setFiltrosAbertos] = useState(false);
  const [corSelecionada, setCorSelecionada] = useState("");
  const [promocao, setPromocao] = useState(false);
  const [precoMaximo, setPrecoMaximo] = useState(500);

  const categorias = [
    { nome: "Roupas", id: "roupas" },
    { nome: "Calçados", id: "calcados" },
    { nome: "Acessórios", id: "acessorios" },
    { nome: "Academia", id: "academia" },
    { nome: "Esportes", id: "esportes" },
    { nome: "Ao ar livre", id: "ar-livre" },
    { nome: "Promoções", id: "ofertas" },
  ];

  function navegar(id) {
    setFiltrosAbertos(false);

    if (onNavigate) {
      onNavigate(id);
      return;
    }

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function pesquisar(termo) {
    const texto = termo
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();

    if (
      texto.includes("todas as categorias") ||
      texto === "tudo"
    ) {
      setFiltrosAbertos(true);
      return;
    }

    const categoria = categorias.find((item) =>
      item.nome
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .includes(texto)
    );

    if (categoria) {
      navegar(categoria.id);
    } else {
      alert(
        "Nenhuma categoria encontrada para essa pesquisa. Tente Roupas, Calçados, Acessórios ou outra categoria."
      );
    }
  }

  return (
    <>
      <div className="topbar">
        <p>Frete grátis acima de R$199</p>
        <span>|</span>
        <p>10% OFF na primeira compra</p>
        <span>|</span>
        <p>Parcele em até 6x sem juros</p>
      </div>

      <header>
        <div className="logo">
          <h1>
            Pink<span>Sport</span>
          </h1>
          <small>ESPORTE • SAÚDE • VOCÊ</small>
        </div>

        <div className="search">
          <SearchBar onSearch={pesquisar} />
        </div>

        <div className="user">
          <a href="#login">Entrar / Cadastrar</a>

          <div className="icons">
            <a
              href="#favoritos"
              className="icon"
              onClick={(e) => {
                e.preventDefault();
                navegar("favoritos");
              }}
            >
              <FaHeart />
              <span>Favoritos</span>
            </a>

            <a
              href="#carrinho"
              className="icon"
              onClick={(e) => {
                e.preventDefault();
                navegar("carrinho");
              }}
            >
              <FaShoppingCart />
              <span>Carrinho</span>
            </a>
          </div>
        </div>
      </header>

      <nav className="navegacao">
        <button
          type="button"
          className="menu-left"
          onClick={() => setFiltrosAbertos(!filtrosAbertos)}
          aria-expanded={filtrosAbertos}
        >
          <FaBars />
          <span>Todas as categorias</span>
        </button>

        <ul>
          {categorias.map((categoria) => (
            <li key={categoria.id}>
              <a
                href={`#${categoria.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  navegar(categoria.id);
                }}
              >
                {categoria.nome}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {filtrosAbertos && (
        <div className="painel-filtros">
          <div className="filtros-cabecalho">
            <h2>Filtrar produtos</h2>

            <button
              type="button"
              className="fechar-filtros"
              onClick={() => setFiltrosAbertos(false)}
              aria-label="Fechar filtros"
            >
              ×
            </button>
          </div>

          <div className="filtro-grupo">
            <h3>Categoria</h3>

            {categorias.map((categoria) => (
              <button
                key={categoria.id}
                type="button"
                onClick={() => navegar(categoria.id)}
              >
                {categoria.nome}
              </button>
            ))}
          </div>

          <div className="filtro-grupo">
            <h3>Cor</h3>

            <select
              value={corSelecionada}
              onChange={(e) => setCorSelecionada(e.target.value)}
            >
              <option value="">Todas as cores</option>
              <option value="Rosa">Rosa</option>
              <option value="Preto">Preto</option>
              <option value="Branco">Branco</option>
              <option value="Bege">Bege</option>
              <option value="Azul">Azul</option>
            </select>
          </div>

          <div className="filtro-grupo">
            <h3>Preço máximo</h3>

            <label>
              Até R$ {precoMaximo.toFixed(2).replace(".", ",")}
            </label>

            <input
              type="range"
              min="0"
              max="500"
              step="10"
              value={precoMaximo}
              onChange={(e) =>
                setPrecoMaximo(Number(e.target.value))
              }
            />
          </div>

          <div className="filtro-grupo">
            <label className="filtro-promocao">
              <input
                type="checkbox"
                checked={promocao}
                onChange={(e) => setPromocao(e.target.checked)}
              />
              Somente produtos em promoção
            </label>
          </div>

          <button
            type="button"
            className="limpar-filtros"
            onClick={() => {
              setCorSelecionada("");
              setPrecoMaximo(500);
              setPromocao(false);
            }}
          >
            Limpar filtros
          </button>
        </div>
      )}
    </>
  );
}
