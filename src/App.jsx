import React from "react";
import itensMinecraft from "./data/data";
import ListaCards from "./components/cards/ListaCards";
import "./assets/style.css";
import Categorias from "./components/categoria/Categorias";
import BarraBusca from "./components/busca/BarraBusca";

function App() {
  const [itensExibidos, setItensExibidos] = React.useState(itensMinecraft);

  React.useEffect(() => {
    setItensExibidos(itensMinecraft);
  }, [itensMinecraft]);

  return (
    <div className="app-container">
      {/* Menu Superior */}
      <header className="app-header">
        <div className="header-content">
          <Categorias
            setItensExibidos={setItensExibidos}
            itensExibidos={itensExibidos}
          />
        </div>
      </header>

      <section className="search-section">
        <BarraBusca setItensExibidos={setItensExibidos} />
      </section>

      {/* Conteúdo da Loja */}
      <main className="main-content">
        <div className="main-container">
          <h2 className="main-title">Itens Disponíveis</h2>
          <ListaCards
            setItensExibidos={setItensExibidos}
            itensExibidos={itensExibidos}
          />
        </div>
      </main>

      <footer className="app-footer">
        <p>Desenvolvido por Camily, William, Victor 2026</p>
      </footer>
    </div>
  );
}

export default App;
