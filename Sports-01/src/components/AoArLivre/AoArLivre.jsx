
import ProdutoCard from "../ProdutoCard/ProdutoCard.jsx";
import "./AoArLivre.css";

const produtos = [
  {
    id: "arlivre-1",
    nome: "Mochila Adventure",
    descricao: "Ideal para trilhas e viagens.",
    preco: 169.90,
    imagem: "/imagens/mochila.png",
  },
  {
    id: "arlivre-2",
    nome: "Barraca Camping",
    descricao: "Perfeita para aventuras ao ar livre.",
    preco: 399.90,
    imagem: "/imagens/barraca.png",
  },
  {
    id: "arlivre-3",
    nome: "Lanterna LED",
    descricao: "Iluminação potente para qualquer aventura.",
    preco: 59.90,
    imagem: "/imagens/lanterna.png",
  },
];

export default function AoArLivre() {
  return (
    <div className="aoarlivre">
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
