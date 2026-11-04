
import ProdutoCard from "../ProdutoCard/ProdutoCard.jsx";
import "./AoArLivre.css";

const produtos = [
  {
    id: "arlivre-1",
    nome: "Mochila Adventure",
    descricao: "Ideal para trilhas e viagens.",
    preco: 169.90,
    imagem: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR-1bc6GV74X1a94INHFfxfF355yvQ5ajtHnPs-G2yVUMtu98Gn52xvlScvVjJEG7PNAMYdagBY06llpjbB9WY4KJDzhTjMVE2_uxZ8ieUoygdN_OCMURmNHblpU454oQycsru9Zb8&usqp=CAc",
  },
  {
    id: "arlivre-2",
    nome: "Barraca Camping",
    descricao: "Perfeita para aventuras ao ar livre.",
    preco: 399.90,
    imagem: "https://m.media-amazon.com/images/I/610IadAdYbL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "arlivre-3",
    nome: "Lanterna LED",
    descricao: "Iluminação potente para qualquer aventura.",
    preco: 59.90,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEYzS_kvs-bWb5TBKWzNvt53F1G5gFhBV_ILyNpuv43w&s=10",
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
