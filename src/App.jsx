import React from "react";
import itensMinecraft from "./data/data";
import "./assets/style.css";
import BarraBusca from "./components/busca/BarraBusca";
import MenuSuperior from "./components/menuSuperior/MenuSuperior";
import ConteudoDaLoja from "./components/conteudoDaLoja/ConteudoDaLoja";
import Rodape from "./components/rodape/Rodape";
import BuscaCategoria from "./components/buscaCategoria/BuscaCategoria";

function App() {
  const [itensExibidos, setItensExibidos] = React.useState(itensMinecraft);

  return (
    <div className="min-h-screen bg-[#000000] flex flex-col overflow-x-hidden">
      <BuscaCategoria setItensExibidos={setItensExibidos} />

      <ConteudoDaLoja
        setItensExibidos={setItensExibidos}
        itensExibidos={itensExibidos}
      />

      <Rodape />
    </div>
  );
}

export default App;
