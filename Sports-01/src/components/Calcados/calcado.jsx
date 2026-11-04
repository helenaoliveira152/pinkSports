
import ProdutoCard from "../ProdutoCard/ProdutoCard.jsx";
import "./calcado.css";

const produtos = [
  {
    id: "calcado-1",
    nome: "Tênis Para Corrida",
    descricao: "Fofo e confortável para treinar.",
    preco: 189.90,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDEirrTcpd3ag1Yt_HRzMvlCCRzNM8dBNjiO4hIu1HMA&s=10",
  },
  {
    id: "calcado-2",
    nome: "Tênis Caminhada",
    descricao: "Leve e macio para seus treinos.",
    preco: 349.90,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyVd7SZC5bx36frAZ3b0pzgmGqjInuVXqLIkqP6OWsvw&s=10",
  },
  {
    id: "calcado-3",
    nome: "Tênis Confortável",
    descricao: "Beleza e conforto para seu look.",
    preco: 239.90,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnEDlnUcSSi8e_-4wewkfuoOJXsGbi1G1tSHqdvLXlXQ&s=10",
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
