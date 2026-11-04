
import ProdutoCard from "../ProdutoCard/ProdutoCard.jsx";
import "./acessorio.css";

const produtos = [
  {
    id: "acessorio-1",
    nome: "Garrafa Esportiva",
    descricao: "Hidrate-se durante seus treinos.",
    preco: 39.90,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRexFNS7mfXTOjAZzgdXgi5UuHNgKzWxRYqSfHukFf7yQ&s=10",
  },
  {
    id: "acessorio-2",
    nome: "Bolsa Esportiva",
    descricao: "Praticidade para levar seus itens.",
    preco: 89.90,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuD80P7F1WlmVP0bGJpoiwn6ofLOqrvrMGZyVUg-xsiw&s=10",
  },
  {
    id: "acessorio-3",
    nome: "Boné Esportivo",
    descricao: "Conforto e estilo para atividades ao ar livre.",
    preco: 34.90,
    imagem: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTKZs0l0jn3TVZMooSJ06WaPSH9pQJnCkfElg_6CzNP6ETdoiSLOQTXk295YspQzerTPlTLX3Fd0vof-m0OircMmOtXQUzn_uIMda2R9RMjnjTAPMEduHa-0PpjIsGp8B1Thnye2H_a37U&usqp=CAc",
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
