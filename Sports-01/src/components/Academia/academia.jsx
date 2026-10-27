

import ProdutoCard from "../ProdutoCard/ProdutoCard.jsx";
import "./academia.css";

const produtos = [
  {
    id: "academia-1",
    nome: "Legging Fitness",
    descricao: "Conforto e liberdade para treinar.",
    preco: 89.90,
    imagem: "/imagens/legging.png",
  },
  {
    id: "academia-2",
    nome: "Top Fitness",
    descricao: "Leve e confortável para seus treinos.",
    preco: 49.90,
    imagem: "/imagens/top.png",
  },
  {
    id: "academia-3",
    nome: "Polaina Fitness",
    descricao: "Estilo e conforto para seu look.",
    preco: 39.90,
    imagem: "/imagens/polaina.png",
  },
];

export default function Academia() {
  return (
    <div className="academia">
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
