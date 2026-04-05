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
        className="bg-yellow-200 border-2 border-black text-red-600 p-3 rounded-xl shadow-xl"
        value={textoBusca}
        onChange={(e) => setTextoBusca(e.target.value)}
      />

      <Categoria setItens={setItensFiltrados} textoBusca={textoBusca} />

      <ListaCards itens={itensFiltrados} />
    </>
  );
}

export default App;