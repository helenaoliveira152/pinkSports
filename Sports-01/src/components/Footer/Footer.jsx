import "./Footer.css";

import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaCreditCard,
  FaTruck,
  FaLock,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-col">

          <h2>
            Pink<span>Sport</span>
          </h2>

          <p>
            Moda fitness feminina desenvolvida para unir conforto,
            desempenho e muito estilo.
          </p>

        </div>

        <div className="footer-col">

          <h3>Institucional</h3>

          <a href="#roupas">Roupas</a>
          <a href="#calcados">Calçados</a>
          <a href="#acessorios">Acessórios</a>
          <a href="#ofertas">Promoções</a>

        </div>

        <div className="footer-col">

          <h3>Atendimento</h3>

          <p>(48) 99999-9999</p>

          <p>contato@pinksport.com</p>

          <p>Segunda à Sexta</p>

          <p>08h às 18h</p>

        </div>

        <div className="footer-col">

          <h3>Redes Sociais</h3>

          <div className="redes">

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaFacebook />
            </a>

            <a href="#">
              <FaWhatsapp />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-info">

        <div>

          <FaTruck />

          <span>Entrega para todo o Brasil</span>

        </div>

        <div>

          <FaCreditCard />

          <span>Pagamento em até 6x</span>

        </div>

        <div>

          <FaLock />

          <span>Compra 100% segura</span>

        </div>

      </div>

      <div className="footer-copy">

        © 2026 PinkSport • Todos os direitos reservados.

      </div>

    </footer>
  );
}