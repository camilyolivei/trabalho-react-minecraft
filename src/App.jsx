import React from "react";
import itensMinecraft from "./data/data.js";
import ListaCards from "./components/cards/ListaCards.jsx";
import Categoria from "./components/categoria/Categoria.jsx";
import "../src/assets/style.css";

function App() {
  const [textoBusca, setTextoBusca] = React.useState("");
  const [itensFiltrados, setItensFiltrados] = React.useState(itensMinecraft);

  return (
    <>
      <input
        type="text"
        placeholder="Buscar item..."
        value={textoBusca}
        onChange={(e) => setTextoBusca(e.target.value)}
      />

      <Categoria setItens={setItensFiltrados} textoBusca={textoBusca} />

      <ListaCards itens={itensFiltrados} />
    </>
  );
}

export default App;