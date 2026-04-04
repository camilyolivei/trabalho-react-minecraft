import React from "react";
import itensMinecraft from "./data/data";
import ListaCards from "./components/cards/ListaCards";
import "../src/assets/style.css";
import Categorias from "./components/categoria/Categorias";
import BarraBusca from "./components/busca/BarraBusca";

function App() {
  /* 
    estadoListaItens:
    Guarda os itens que estão sendo exibidos na tela.
  */
  const [itensExibidos, setItensExibidos] = React.useState(itensMinecraft);

  return (
    <>
      <BarraBusca setItensExibidos={setItensExibidos} />
      <Categorias setItensExibidos={setItensExibidos} />
      <ListaCards itensExibidos={itensExibidos} />
    </>
  );
}

export default App;
