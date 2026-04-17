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
      <h1 className="text-6xl md:text-7xl font-extrabold text-center mt-8 mb-4 text-[#2e7d32] tracking-widest drop-shadow-[4px_4px_0_#0d0d0d]">
        Minecraft Itens
      </h1>

      <h2 className="text-2xl text-center text-[#1b5e20] font-bold mb-6 tracking-wide">
        Catálogo de Itens
      </h2>

        <input type="text" placeholder="Buscar item..."
        value={textoBusca}
        onChange={(e) => setTextoBusca(e.target.value)}
        className="block mx-auto w-11/12 max-w-md p-3 rounded-lg mb-6  border border-gray-300"/>

      <Categoria setItens={setItensFiltrados} textoBusca={textoBusca} />

      <ListaCards itens={itensFiltrados} />
    </>
  );
}

export default App;
