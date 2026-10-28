
import ProdutoCard from "../ProdutoCard/ProdutoCard.jsx";
import "./acessorio.css";

const produtos = [
  {
    id: "acessorio-1",
    nome: "Garrafa Esportiva",
    descricao: "Hidrate-se durante seus treinos.",
    preco: 39.90,
    imagem: "/imagens/garrafa.png",
  },
  {
    id: "acessorio-2",
    nome: "Bolsa Esportiva",
    descricao: "Praticidade para levar seus itens.",
    preco: 89.90,
    imagem: "/imagens/bolsa.png",
  },
  {
    id: "acessorio-3",
    nome: "Boné Esportivo",
    descricao: "Conforto e estilo para atividades ao ar livre.",
    preco: 34.90,
    imagem: "/imagens/bone.png",
  },
];

export default function Acessorios() {
  return (
    <div className="acessorios">
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
