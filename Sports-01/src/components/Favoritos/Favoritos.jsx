import ProdutoCard from "../ProdutoCard/ProdutoCard.jsx";
import "./Favoritos.css";

const produtos = [
  {
    id: "favorito-1",
    nome: "Conjunto Premium",
    descricao: "Nosso conjunto mais amado pelas clientes.",
    preco: 189.90,
    imagem: "/imagens/favorito1.png",
  },
  {
    id: "favorito-2",
    nome: "Top Fitness",
    descricao: "Conforto e sustentação para qualquer treino.",
    preco: 79.90,
    imagem: "/imagens/favorito2.png",
  },
  {
    id: "favorito-3",
    nome: "Legging Essential",
    descricao: "Modelagem perfeita e tecido confortável.",
    preco: 109.90,
    imagem: "/imagens/favorito3.png",
  },
];

export default function Favoritos() {
  return (
    <div className="favoritos">
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