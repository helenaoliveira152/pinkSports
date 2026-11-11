import "./banner.css";
import bannerImg from "../../assets/pink.png";

function Banner() {
  return (
    <section
      className="banner"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      <div className="banner-overlay"></div>

      <div className="banner-conteudo">

        <span className="banner-tag">
          NOVA COLEÇÃO 2026
        </span>

        <h1>
          Vista sua
          <span> melhor versão.</span>
        </h1>

        <p className="banner-descricao">
          Moda fitness feminina com conforto, elegância
          e qualidade para acompanhar todos os seus
          desafios.
        </p>

        <div className="banner-botoes">

          <a href="#roupas" className="banner-botao">
            Comprar agora
          </a>

          <a href="#ofertas" className="banner-botao-secundario">
            Ver ofertas
          </a>

        </div>

      </div>
    </section>
  );
}

export default Banner;