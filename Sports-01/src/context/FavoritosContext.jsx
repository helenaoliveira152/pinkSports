import { createContext, useContext, useEffect, useState } from "react";

const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState(() => {
    const favoritosSalvos = localStorage.getItem("favoritos");

    return favoritosSalvos ? JSON.parse(favoritosSalvos) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "favoritos",
      JSON.stringify(favoritos)
    );
  }, [favoritos]);

  function adicionarFavorito(produto) {
    const existe = favoritos.some(
      (item) => item.id === produto.id
    );

    if (existe) return;

    setFavoritos([...favoritos, produto]);
  }

  function removerFavorito(id) {
    setFavoritos(
      favoritos.filter((item) => item.id !== id)
    );
  }

  function favoritoExiste(id) {
    return favoritos.some(
      (item) => item.id === id
    );
  }

  function alternarFavorito(produto) {
    if (favoritoExiste(produto.id)) {
      removerFavorito(produto.id);
    } else {
      adicionarFavorito(produto);
    }
  }

  return (
    <FavoritosContext.Provider
      value={{
        favoritos,
        adicionarFavorito,
        removerFavorito,
        favoritoExiste,
        alternarFavorito,
      }}
    >
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritos() {
  return useContext(FavoritosContext);
}