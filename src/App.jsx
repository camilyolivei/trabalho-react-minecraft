import React from "react";
import itensMinecraft from "./data/data.js";
import ListaCards from "./components/cards/ListaCards.jsx";
import Categoria from "./components/categoria/Categoria.jsx";
import "../src/assets/style.css";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Destaque from "./components/destaque/Destaque.jsx";

function App() {
  const [textoBusca, setTextoBusca] = React.useState("");
  const [itensFiltrados, setItensFiltrados] = React.useState(itensMinecraft);
  const [itemDestaque, setItemDestaque] = React.useState([]);

  const [ativo,setAtivo] = React.useState(true)

  return (
    <>
      <div className="min-h-screen bg-[#000000] flex flex-col overflow-x-hidden ">
        <Header textoBusca={textoBusca} setTextoBusca={setTextoBusca} />

        <Categoria setItens={setItensFiltrados} textoBusca={textoBusca} />
        <Destaque setItemDestaque={setItemDestaque} itemDestaque={itemDestaque} ativo={ativo} setAtivo={setAtivo}/>
        <ListaCards itens={itensFiltrados} setItemDestaque={setItemDestaque} itemDestaque={itemDestaque} setAtivo={setAtivo} ativo={ativo}/>

        <Footer />
      </div>
    </>
  );
}

export default App;
