
import ProdutoCard from "../ProdutoCard/ProdutoCard.jsx";
import "./academia.css";

const produtos = [
  {
    id: "calcado-1",
    nome: "Tênis Fit",
    descricao: "Fofo e confortável para treinar.",
    preco: 189.90,
    imagem: "/imagens/tenisfit.png",
  },
  {
    id: "calcado-2",
    nome: "Tênis Esporte",
    descricao: "Leve e macio para seus treinos.",
    preco: 349.90,
    imagem: "/imagens/tenisesporte.png",
  },
  {
    id: "calcado-3",
    nome: "Tênis Fitness",
    descricao: "Beleza e conforto para seu look.",
    preco: 239.90,
    imagem: "/imagens/tenisfitness.png",
  },
];

export default function Calcados() {
  return (
    <div className="calcados">
      <div className="produtos-grid">
        {produtos.map((produto) => (
          <ProdutoCard key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
}
