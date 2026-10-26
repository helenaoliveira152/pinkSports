
import "./App.css";

import Header from "./components/Header/Header";
import Roupa from "./components/Roupa/roupa.jsx";
import Carrinho from "./components/Carrinho/carrinho.jsx";

import { CarrinhoProvider } from "./context/CarrinhoContext.jsx";

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
        </section>

        <section id="acessorios" className="secao-produtos">
          <h2>
            <PiHandbag /> Acessórios
          </h2>
        </section>

        <section id="academia" className="secao-produtos">
          <h2>
            <PiBarbell /> Academia
          </h2>
        </section>

        <section id="esportes" className="secao-produtos">
          <h2>
            <PiSoccerBall /> Esportes
          </h2>
        </section>

        <section id="ar-livre" className="secao-produtos">
          <h2>
            <PiMountains /> Ao ar livre
          </h2>
        </section>

        <section id="ofertas" className="secao-produtos">
          <h2>
            <PiTag /> Promoções
          </h2>
        </section>

        <section id="favoritos" className="secao-produtos">
          <h2>
            <PiHeart /> Favoritos
          </h2>
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
  return (
    <CarrinhoProvider>
      <AppConteudo />
    </CarrinhoProvider>
  );
}

export default App;
