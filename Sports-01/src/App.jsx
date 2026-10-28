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
  PiShoppingBag,
} from "react-icons/pi";

function AppConteudo() {
  function navegarPara(secao) {
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
      <Header onNavigate={navegarPara} />

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

        <section id="carrinho" className="secao-produtos">
          <h2>
            <PiShoppingBag /> Carrinho
          </h2>
          <Carrinho />
        </section>
      </main>
    </>
  );
}

function App() {
  return <AppConteudo />;
}

export default App;