import React from "react";
import itensMinecraft from "../../data/data";

const Categoria = ({ setItens, textoBusca }) => {
  const [categoriaSelecionada, setCategoriaSelecionada] =
    React.useState("todos");

  const categoriasUnicas = [
    "todos",
    ...new Set(itensMinecraft.map((item) => item.categoria)),
  ];

  function clicouCategoria(categoria) {
    setCategoriaSelecionada(categoria);
  }

  React.useEffect(() => {
    let filtrados = itensMinecraft;

    // FILTRO DE CATEGORIA
    if (categoriaSelecionada !== "todos") {
      filtrados = filtrados.filter(
        (item) =>
          item.categoria.toLowerCase().trim() ===
          categoriaSelecionada.toLowerCase().trim()
      );
    }

    // FILTRO DE BUSCA
    if (textoBusca.trim() !== "") {
      filtrados = filtrados.filter((item) =>
        item.nome.toLowerCase().includes(textoBusca.toLowerCase())
      );
    }

    setItens(filtrados);
  }, [categoriaSelecionada, textoBusca]);

  return (
    <>
      <ul>
        {categoriasUnicas.map((categoria, id) => (
          <li key={id}>
            <button onClick={() => clicouCategoria(categoria)}>
              {categoria}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Categoria;