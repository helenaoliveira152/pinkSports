import Academia from "../Academia/academia";
import Carrinho from "../Carrinho/carrinho";

export default function Main() {
  return (
    <main>
      <Academia />

      <section id="carrinho">
        <h2>Carrinho</h2>
        <Carrinho />
      </section>
    </main>
  );
}
