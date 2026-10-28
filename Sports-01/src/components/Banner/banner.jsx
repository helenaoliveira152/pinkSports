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
      <div className="banner-conteudo">
        <p className="banner-subtitulo">
          MOVIMENTO É LIBERDADE ♥
        </p>

        <h1>
          Seu esporte,
          <span> do seu jeito!</span>
        </h1>

        <p className="banner-descricao">
          Roupas, calçados e acessórios para te
          <br />
          acompanhar em todas as fases.
        </p>

        <a href="#ofertas" className="banner-botao">
          Ver ofertas <span>→</span>
        </a>
      </div>
    </section>
  );
}

export default Banner;
