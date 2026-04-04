import React from "react";
import itensMinecraft from "../../data/data";

const Categorias = ({ setItensExibidos }) => {
  /* Estado que armazena a categoria atualmente selecionada */

  const [categoriaAtual, setCategoriaAtual] = React.useState("todos");

  /*  Cria uma lista de categorias únicas com base nos itens */

  const listaCategorias = [
    "todos",
    ...new Set(itensMinecraft.map((item) => item.categoria)),
  ];

  /*=================================================================================*/

  /* 
  Função chamada ao clicar em uma categoria.
  Atualiza o estado com a categoria selecionada
  */
  function selecionarCategoria(categoria) {
    setCategoriaAtual(categoria);
  }

  /* 
  Sempre que a categoria mudar, filtra os itens com base nela.
  Se for "todos", retorna todos os itens.
  Caso contrário, filtra comparando as categorias (ignorando maiúsculas/minúsculas e espaços)
  */
  React.useEffect(() => {
    const itensFiltrados =
      categoriaAtual === "todos"
        ? itensMinecraft
        : itensMinecraft.filter(
            (item) =>
              categoriaAtual.toLowerCase().trim() ===
              item.categoria.toLowerCase().trim(),
          );

    /* Atualiza os itens mostrados na tela de acordo com a categoria */
    setItensExibidos(itensFiltrados);
  }, [categoriaAtual]);

  return (
    <>
      <ul>
        {listaCategorias.map((categoria, index) => (
          <li key={index}>
            <button onClick={() => selecionarCategoria(categoria)}>
              {categoria}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Categorias;
