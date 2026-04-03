import React from "react";
import itensMinecraft from "./data/data";
import ListaCards from "./components/cards/ListaCards";
import Categoria from "./components/categoria/Categoria";
import "../src/assets/style.css";

function App() {
  /* 
    estadoListaItens:
    Guarda os itens que estão sendo exibidos na tela.
  */
  const [estadoListaItens, setListaItens] = React.useState(itensMinecraft);

  return (
    <>
      <ListaCards itens={estadoListaItens} />
    </>
  );
}

export default App;
