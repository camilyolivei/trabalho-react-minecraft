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
  //criei estados novos, sendo eles: texto de busca - o que o usuário digitar no input
  const [estadoListaItens, setListaItens] = React.useState(itensMinecraft);
  const [textoBusca, setTextoBusca] = React.useState("");
  const [itensFiltrados, setItensFiltrados] = React.useState(itensMinecraft);

  return (
    <>
        {/* Input de Buscar Itens*/}
        <input type="text" placeholder="Buscar item..." value={textoBusca} onChange={(e)=>setTextoBusca(e.target.value)}></input>
        
      <Categoria setItens={setListaItens} textoBusca={textoBusca}/>

      <ListaCards itens={estadoListaItens} />
    </>
  );
}

export default App
