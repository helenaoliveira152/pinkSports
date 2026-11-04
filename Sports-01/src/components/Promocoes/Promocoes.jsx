
import ProdutoCard from "../ProdutoCard/ProdutoCard.jsx";
import "./Promocoes.css";

const produtos = [
  {
    id: "promo-1",
    nome: "Conjunto Top + Legging/Bermuda",
    descricao: "De R$ 99,90 por apenas R$ 69,90.",
    preco: 69.90,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1mbdBSpkgCrBfkNF3Ud6-TOlJEUlDTdKT_Zpjc7QneA&s",
  },
  {
    id: "promo-2",
    nome: "Kits de Mini Bands e Super Bands",
    descricao: "Conforto e desempenho com desconto.",
    preco: 199.90,
    imagem: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRhOu1OHMD7dVURPwRpn_Z2ka3r-VmKyJFpYLMQqwd8zSZNOcpAS3g0vGyWTNbva4rkYxXwM-kJSmepd67GIjNIGg2Nn6P6vzxPaa6cYM7ZZmOD7QGX6YH7mdiHca_CcqMpBLx-1DY&usqp=CAc",
  },
  {
    id: "promo-3",
    nome: "Kit Mochila Esportiva",
    descricao: "Leve tudo para o treino com economia.",
    preco: 79.90,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCf5g-Uy_kzuIX417_ZQ9qtCMuX6jUd8vb-MxBZohmXg&s",
  },
];

export default function Promocoes() {
  return (
    <div className="promocoes">
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
