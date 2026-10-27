import ProdutoCard from "../ProdutoCard/ProdutoCard.jsx"
import "./roupa.css";

const produtos = [
  {
    id: "roupa-1",
    nome: "Camiseta Esportiva",
    descricao: "Leveza e conforto para o dia a dia.",
    preco: 59.90,
    imagem: "/imagens/camiseta.png",
  },
  {
    id: "roupa-2",
    nome: "Shorts Esportivo",
    descricao: "Liberdade de movimento para suas atividades.",
    preco: 69.90,
    imagem: "/imagens/shorts.png",
  },
  {
    id: "roupa-3",
    nome: "Jaqueta Esportiva",
    descricao: "Praticidade e conforto para seus treinos.",
    preco: 119.90,
    imagem: "/imagens/jaqueta.png",
  },
];

export default function Roupa() {
  return (
    <div className="roupa">
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
