import React from "react";
import itensMinecraft from "./data/data.js";
import ListaCards from "./components/cards/ListaCards.jsx";
import Categoria from "./components/categoria/Categoria.jsx";
import "../src/assets/style.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  const [textoBusca, setTextoBusca] = React.useState("");
  const [itensFiltrados, setItensFiltrados] = React.useState(itensMinecraft);

  return (
    <>
      <div className="min-h-screen bg-[#000000] flex flex-col overflow-x-hidden ">
        <Header textoBusca={textoBusca} setTextoBusca={setTextoBusca} />

        <Categoria setItens={setItensFiltrados} textoBusca={textoBusca} />

        <ListaCards itens={itensFiltrados} />

        <Footer />
      </div>
    </>
  );
}

export default App;
