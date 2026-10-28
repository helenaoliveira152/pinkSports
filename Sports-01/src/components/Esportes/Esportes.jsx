
import ProdutoCard from "../ProdutoCard/ProdutoCard.jsx";
import "./Esportes.css";

const produtos = [
  {
    id: "esporte-1",
    nome: "Bola de Futebol",
    descricao: "Ideal para partidas e treinos.",
    preco: 99.90,
    imagem: "/imagens/bola.png",
  },
  {
    id: "esporte-2",
    nome: "Raquete de Tênis",
    descricao: "Leve e resistente para seu desempenho.",
    preco: 249.90,
    imagem: "/imagens/raquete.png",
  },
  {
    id: "esporte-3",
    nome: "Luva de Goleiro",
    descricao: "Proteção e aderência em todas as defesas.",
    preco: 89.90,
    imagem: "/imagens/luva.png",
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
