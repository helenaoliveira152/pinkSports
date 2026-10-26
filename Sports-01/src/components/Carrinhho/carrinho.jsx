
import { FaTrash } from "react-icons/fa";
import { useCarrinho } from "./context/CarrinhoContext";
import "./carrinho.css";

export default function Carrinho() {
  const {
    carrinho,
    removerCarrinho,
    alterarQuantidade,
  } = useCarrinho();

  const total = carrinho.reduce(
    (soma, produto) =>
      soma + produto.preco * produto.quantidade,
    0
  );

  return (
    <section className="carrinho-conteudo">
      {carrinho.length === 0 ? (
        <p className="carrinho-vazio">
          Teu carrinho está vazio. Adiciona algum produto!
        </p>
      ) : (
        <>
          {carrinho.map((produto) => (
            <article className="item-carrinho" key={produto.id}>
              <img src={produto.imagem} alt={produto.nome} />

              <div className="detalhes-carrinho">
                <h3>{produto.nome}</h3>

                <p>
                  {produto.preco.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>

                <div className="quantidade-controle">
                  <button
                    type="button"
                    onClick={() =>
                      alterarQuantidade(
                        produto.id,
                        produto.quantidade - 1
                      )
                    }
                    disabled={produto.quantidade <= 1}
                  >
                    −
                  </button>

                  <span>{produto.quantidade}</span>

                  <button
                    type="button"
                    onClick={() =>
                      alterarQuantidade(
                        produto.id,
                        produto.quantidade + 1
                      )
                    }
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                type="button"
                className="remover-carrinho"
                onClick={() => removerCarrinho(produto.id)}
                aria-label={`Remover ${produto.nome}`}
              >
                <FaTrash />
              </button>
            </article>
          ))}

          <div className="total-carrinho">
            <strong>
              Total:{" "}
              {total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </strong>
          </div>
        </>
      )}
    </section>
  );
}
