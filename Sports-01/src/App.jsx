import { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Banner from "./components/Banner/banner";

import Roupa from "./components/Roupa/roupa.jsx";
import Calcados from "./components/Calcados/calcado.jsx";
import Acessorios from "./components/Acessorios/acessorio.jsx";
import Academia from "./components/Academia/academia.jsx";
import Esportes from "./components/Esportes/Esportes.jsx";
import AoArLivre from "./components/AoArLivre/AoArLivre.jsx";
import Promocoes from "./components/Promocoes/Promocoes.jsx";
import Favoritos from "./components/Favoritos/Favoritos.jsx";
import Carrinho from "./components/Carrinho/carrinho.jsx";

import {
  PiTShirt,
  PiSneaker,
  PiHandbag,
  PiBarbell,
  PiSoccerBall,
  PiMountains,
  PiTag,
  PiHeart,
} from "react-icons/pi";

function AppConteudo() {
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

  function navegarPara(secao) {
    if (secao === "carrinho") {
      setCarrinhoAberto(true);
      return;
    }

    const elemento = document.getElementById(secao);

    if (elemento) {
      elemento.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <>
      <Header
        onNavigate={navegarPara}
        abrirCarrinho={() => setCarrinhoAberto(true)}
      />

      <Banner />

      <main>
        <section id="roupas" className="secao-produtos">
          <h2>
            <PiTShirt /> Roupas
          </h2>
          <Roupa />
        </section>

        <section id="calcados" className="secao-produtos">
          <h2>
            <PiSneaker /> Calçados
          </h2>
          <Calcados />
        </section>

        <section id="acessorios" className="secao-produtos">
          <h2>
            <PiHandbag /> Acessórios
          </h2>
          <Acessorios />
        </section>

        <section id="academia" className="secao-produtos">
          <h2>
            <PiBarbell /> Academia
          </h2>
          <Academia />
        </section>

        <section id="esportes" className="secao-produtos">
          <h2>
            <PiSoccerBall /> Esportes
          </h2>
          <Esportes />
        </section>

        <section id="ar-livre" className="secao-produtos">
          <h2>
            <PiMountains /> Ao ar livre
          </h2>
          <AoArLivre />
        </section>

        <section id="ofertas" className="secao-produtos">
          <h2>
            <PiTag /> Promoções
          </h2>
          <Promocoes />
        </section>

        <section id="favoritos" className="secao-produtos">
          <h2>
            <PiHeart /> Favoritos
          </h2>
          <Favoritos />
        </section>
      </main>

      {carrinhoAberto && (
        <>
          <div
            className="overlay-carrinho"
            onClick={() => setCarrinhoAberto(false)}
          />

          <aside className="painel-carrinho">
            <div className="cabecalho-carrinho">
              <h2>🛒 Meu Carrinho</h2>

              <button onClick={() => setCarrinhoAberto(false)}>
                ×
              </button>
            </div>

            <Carrinho />
          </aside>
        </>
      )}
    </>
  );
}

export default function App() {
  return <AppConteudo />;
}