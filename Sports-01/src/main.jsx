import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { CarrinhoProvider } from "./context/CarrinhoContext.jsx";
import { FavoritosProvider } from "./context/FavoritosContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CarrinhoProvider>
      <FavoritosProvider>
        <App />
      </FavoritosProvider>
    </CarrinhoProvider>
  </StrictMode>
);