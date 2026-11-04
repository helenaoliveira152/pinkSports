
import ProdutoCard from "../ProdutoCard/ProdutoCard.jsx";
import "./Esportes.css";

const produtos = [
  {
    id: "esporte-1",
    nome: "Bola de Vôlei",
    descricao: "Ideal para partidas e treinos.",
    preco: 99.90,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiG1w9pdlGCh3zrp3_-6als4fhLUWSZpuWpdcFaCOOmw&s=10",
  },
  {
    id: "esporte-2",
    nome: "Raquete de Tênis",
    descricao: "Leve e resistente para seu desempenho.",
    preco: 249.90,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYunPA-IwlMxqIqWutq9cVHGsb2VRefj07nRry1tKWlQ&s=10",
  },
  {
    id: "esporte-3",
    nome: "Taco d Golfe",
    descricao: "Proteção e aderência em todas as defesas.",
    preco: 89.90,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStCgkTxGbStPd3VrkCRqF3LZuNV0bFfRoNn-JIaktAgg&s=10",
  },
];

export default function Esportes() {
  return (
    <div className="esportes">
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
