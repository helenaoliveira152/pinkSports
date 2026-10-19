import "./Header.css";
import { FaHeart, FaShoppingCart, FaBars, FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <>
      {/* Barra superior */}
      <div className="topbar">
        <p>Frete grátis acima de R$199</p>
        <span>|</span>
        <p>10% OFF na primeira compra</p>
        <span>|</span>
        <p>Parcele em até 6x sem juros</p>
      </div>

      {/* Header */}
      <header>

        {/* Logo */}
        <div className="logo">
          <h1>
            Pink<span>Sport</span>
          </h1>

          <small>ESPORTE • SAÚDE • VOCÊ</small>
        </div>

        {/* Pesquisa */}

        <div className="search">

          <input
            type="text"
            placeholder="O que você está procurando?"
          />

          <button>

            <FaSearch />

          </button>

        </div>

        {/* Usuário */}

        <div className="user">

          <a href="/">Entrar / Cadastrar</a>

          <div className="icons">

            <div className="icon">

              <FaHeart />

              <span>Favoritos</span>

            </div>

            <div className="icon">

              <FaShoppingCart />

              <span>Carrinho</span>

            </div>

          </div>

        </div>

      </header>

      {/* Menu */}

      <nav>

        <div className="menu-left">

          <FaBars />

          <span>Todas as categorias</span>

        </div>

        <ul>

          <li>Roupas</li>
          <li>Calçados</li>
          <li>Acessórios</li>
          <li>Academia</li>
          <li>Esportes</li>
          <li>Ao ar livre</li>
          <li>Promoções</li>

        </ul>

      </nav>
    </>
  );
}