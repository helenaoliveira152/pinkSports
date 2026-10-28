
import ProdutoCard from "../ProdutoCard/ProdutoCard.jsx";
import "./Promocoes.css";

const produtos = [
  {
    id: "promo-1",
    nome: "Top Fitness",
    descricao: "De R$ 99,90 por apenas R$ 69,90.",
    preco: 69.90,
    imagem: "/imagens/topfitness.png",
  },
  {
    id: "promo-2",
    nome: "Tênis Running",
    descricao: "Conforto e desempenho com desconto.",
    preco: 199.90,
    imagem: "/imagens/tenisrunning.png",
  },
  {
    id: "promo-3",
    nome: "Mochila Esportiva",
    descricao: "Leve tudo para o treino com economia.",
    preco: 79.90,
    imagem: "/imagens/mochilaesportiva.png",
  },
];

export default function Promocoes() {
  return (
    <div className="promocoes">
      <div className="produtos-grid">
        {produtos.map((produto) => (
          <ProdutoCard
            key={produto.id}
            produto={produto}
          />
        ))}
      </div>
    </div>
  );
}
