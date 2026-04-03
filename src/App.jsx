import itensMinecraft from "./data/data.js";
import ListaCards from "./components/cards/ListaCards.jsx";
import Categoria from "./components/categoria/Categoria.jsx";
import "../src/assets/style.css";

function App() {
  /* 
    estadoListaItens:
    Guarda os itens que estão sendo exibidos na tela.
  */
  //criei estados novos, sendo eles: texto de busca - o que o usuário digitar no input
  const [textoBusca, setTextoBusca] = React.useState("");
  const [itensFiltrados, setItensFiltrados] = React.useState(itensMinecraft);

  return (
    <>
        {/* Input de Buscar Itens*/}
        <input type="text" placeholder="Buscar item..." value={textoBusca} onChange={(e)=>setTextoBusca(e.target.value)}></input>

      <Categoria setItens={setItensFiltrados} textoBusca={textoBusca}/>

      <ListaCards itens={itensFiltrados} />
    </>
  );
}

export default App
