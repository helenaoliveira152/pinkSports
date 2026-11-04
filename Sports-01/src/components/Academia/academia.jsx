import ProdutoCard from "../ProdutoCard/ProdutoCard.jsx";
import "./academia.css";

const produtos = [
  {
    id: "academia-1",
    nome: "Legging Fitness",
    descricao: "Conforto e liberdade para treinar.",
    preco: 89.9,
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzfAhSdwnivhQMxdjUlH1NBf09GrtjV1GJR_5QHRxMGM7lsFyT2FzgCZI&s=10https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOghRqHhUZf8oq51ucXvl_zALafKXMMgUStZfYiYdWUeu3iutNPrGJj-Zg&s=", // Imagem focada em pernas com legging em movimento
  },
  {
    id: "academia-2",
    nome: "Top Fitness",
    descricao: "Leve e confortável para seus treinos.",
    preco: 49.9,
    imagem: "", // Imagem de uma mulher vestindo um top de academia
  },
  {
    id: "academia-3",
    nome: "Polaina Fitness",
    descricao: "Estilo e conforto para seu look.",
    preco: 39.9,
    imagem: "", // Imagem focada em pernas, tênis e meias/polainas de treino
  },
];

export default function Academia() {
  return (
    <div className="academia">
      <div className="produtos-grid">
        {produtos.map((produto) => (
          <ProdutoCard key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
}
