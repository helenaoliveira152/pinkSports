
import {
  FaTrash,
  FaMinus,
  FaPlus,
  FaShoppingCart,
} from "react-icons/fa";

import { useCarrinho } from "../../context/CarrinhoContext";
import "./carrinho.css";

export default function Carrinho() {
  const {
    carrinho,
    removerCarrinho,
    alterarQuantidade,
    totalCarrinho,
  } = useCarrinho();

  function formatarPreco(valor) {
    return Number(valor).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <section className="carrinho-container">
      <h2>
        <FaShoppingCart /> Meu Carrinho
      </h2>

      {carrinho.length === 0 ? (
        <div className="carrinho-vazio">
          <FaShoppingCart size={35} />
          <p>Seu carrinho está vazio.</p>
          <span>Adicione suas peças favoritas!</span>
        </div>
      ) : (
        <>
          <div className="carrinho-lista">
            {carrinho.map((produto) => (
              <article
                className="carrinho-item"
                key={produto.id}
              >
                <div className="carrinho-item-info">
                  <h3>{produto.nome}</h3>

                  <p>
                    Preço unitário: {formatarPreco(produto.preco)}
                  </p>

                  <strong>
                    Subtotal:{" "}
                    {formatarPreco(
                      Number(produto.preco) *
                        (produto.quantidade || 1)
                    )}
                  </strong>
                </div>

                <div className="carrinho-controles">
                  <button
                    type="button"
                    onClick={() =>
                      alterarQuantidade(
                        produto.id,
                        (produto.quantidade || 1) - 1
                      )
                    }
                    disabled={(produto.quantidade || 1) <= 1}
                    aria-label="Diminuir quantidade"
                  >
                    <FaMinus />
                  </button>

                  <span>{produto.quantidade || 1}</span>

                  <button
                    type="button"
                    onClick={() =>
                      alterarQuantidade(
                        produto.id,
                        (produto.quantidade || 1) + 1
                      )
                    }
                    aria-label="Aumentar quantidade"
                  >
                    <FaPlus />
                  </button>

                  <button
                    type="button"
                    className="carrinho-remover"
                    onClick={() => removerCarrinho(produto.id)}
                    aria-label={`Remover ${produto.nome}`}
                  >
                    <FaTrash />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="carrinho-total">
            <h3>
              Total: {formatarPreco(totalCarrinho)}
            </h3>

            <p>
              {carrinho.reduce(
                (soma, produto) =>
                  soma + (produto.quantidade || 1),
                0
              )}{" "}
              unidade(s) no carrinho
            </p>
          </div>
        </>
      )}
    </section>
  );
}
