import ProdutoCard from "../ProdutoCard/ProdutoCard.jsx";
import "./academia.css";

const produtos = [
  {
    id: "academia-1",
    nome: "Legging Fitness",
    descricao: "Conforto e liberdade para treinar.",
    preco: 89.9,
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRolTnQGv-moyYmm96CfET1CJ7oPuwLCRGSs5_WsS6Edw&s=10", // Imagem focada em pernas com legging em movimento
  },
  {
    id: "academia-2",
    nome: "Top Fitness",
    descricao: "Leve e confortável para seus treinos.",
    preco: 49.9,
    imagem:
      "https://tse1.mm.bing.net/th/id/OIP.kjb8IdqM59dnncQ8FcbgkgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", // Imagem de uma mulher vestindo um top de academia
  },
  {
    id: "academia-3",
    nome: "Polaina Fitness",
    descricao: "Estilo e conforto para seu look.",
    preco: 39.9,
    imagem:
      "https://down-br.img.susercontent.com/file/sg-11134201-23030-hdtljswr5cov71", // Imagem focada em pernas, tênis e meias/polainas de treino
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
