import React from "react";
import itensMinecraft from "../../data/data";

const Categoria = ({ setItens }) => {
  /*=============== Lógica para aparecer na tela os button com categoria únicas ============= */
  const [categoriaSelecionada, setCategoriaSelecionada] =
    React.useState("todos");

  const categoriasUnicas = [
    "todos",
    ...new Set(itensMinecraft.map((item) => item.categoria)),
  ];

  /*=================================================================================*/
  /* Quando clicar na tela e para pegar qual categoria foi clicada */
  function clicouCategoria(categoria) {
    setCategoriaSelecionada(categoria);
  }

  React.useEffect(() => {
    const filtradosdeAcordoComCategoria =
      categoriaSelecionada === "todos"
        ? itensMinecraft
        : itensMinecraft.filter(
            (item) =>
              categoriaSelecionada.toLowerCase().trim() ===
              item.categoria.toLowerCase().trim(),
          );

    setItens(filtradosdeAcordoComCategoria);
  }, [categoriaSelecionada]);

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
