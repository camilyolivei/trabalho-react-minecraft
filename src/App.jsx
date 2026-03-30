import React from "react";
import itensMinecraft from "./data/data";
import Card from "./components/cards/Card";
import ListaCards from "./components/cards/ListaCards";

function App() {
  const [categoriaSelecionada, setCategoriaSelecionada] =
    React.useState("todos");
  const [itens, setItens] = React.useState(itensMinecraft);

  const categoriasUnicas = [
    "todos",
    ...new Set(itensMinecraft.map((item) => item.categoria)),
  ];

  function clicouCategoria(categoria) {
    setCategoriaSelecionada(categoria);
  }

  const itensFiltrados =
    categoriaSelecionada === "todos"
      ? itens
      : itens.filter(
          (item) =>
            item.categoria.toLowerCase().trim() ===
            categoriaSelecionada.toLowerCase().trim(),
        );

  return (
    <>
      <ul style={{ display: "flex", gap: "2rem" }}>
        {categoriasUnicas.map((categoria, index) => (
          <li key={index} style={{ listStyle: "none" }}>
            <button
              style={{ cursor: "pointer" }}
              onClick={() => clicouCategoria(categoria)}
            >
              {categoria}
            </button>
          </li>
        ))}
      </ul>

      <ListaCards itens={itensFiltrados} />
    </>
  );
}

export default App;
