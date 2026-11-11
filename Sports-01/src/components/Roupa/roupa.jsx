import ProdutoCard from "../ProdutoCard/ProdutoCard.jsx";
import "./roupa.css";

const produtos = [
  {
    id: "roupa-1",
    nome: "Camiseta Esportiva",
    descricao: "Leveza e conforto para o dia a dia.",
    preco: 59.90,
    imagem: "https://imgcentauro-a.akamaihd.net/1300x1300/M0F5N5EZ.jpg",
  },
  {
    id: "roupa-2",
    nome: "Shorts Esportivo",
    descricao: "Liberdade de movimento para suas atividades.",
    preco: 69.90,
    imagem:
      "https://img.ltwebstatic.com/images3_spmp/2023/08/07/e7/169141873242d8836f256b240b17aa21ea795bee01_thumbnail_900x.webp",
  },
  {
    id: "roupa-3",
    nome: "Jaqueta Esportiva",
    descricao: "Praticidade e conforto para seus treinos.",
    preco: 119.90,
    imagem:
      "https://tse4.mm.bing.net/th/id/OIP.Sw6eSkLyq63Vk9U8odpDdwHaIl?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];

export default function Roupa() {
  return (
    <section className="roupa">
      <div className="produtos-grid">
        {produtos.map((produto) => (
          <ProdutoCard
            key={produto.id}
            produto={produto}
          />
        ))}
      </div>
    </section>
  );
}