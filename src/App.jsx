import React from "react";
import itensMinecraft from "./data/data";
import ListaCards from "./components/cards/ListaCards";
import "../src/assets/style.css";
import Categorias from "./components/categoria/Categorias";

function App() {
  /* 
    estadoListaItens:
    Guarda os itens que estão sendo exibidos na tela.
  */
  const [estadoListaItens, setListaItens] = React.useState(itensMinecraft);

  return (
    <>
      <Categorias setItens={setListaItens}/>
      <ListaCards itens={estadoListaItens} />
    </>
  );
}

export default App
