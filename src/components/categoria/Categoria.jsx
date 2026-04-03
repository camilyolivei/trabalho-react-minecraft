import React from "react";
import itensMinecraft from "../../data/data.js";

//agora esse componente espera tambem o texto de busca como props
const Categoria = ({ setItens, textoBusca }) => {
    //Adicionei texto de busca aqui que vem lá do App.jsx
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


