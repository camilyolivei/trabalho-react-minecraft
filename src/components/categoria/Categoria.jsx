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
        <ul className="flex justify-center flex-wrap gap-3 mb-10">
        {categoriasUnicas.map((categoria) => (
            <li key={categoria}>
         <button
        className="
          bg-gradient-to-b from-[#5aa33a] to-[#3d7a28]
          border-2 border-[#2a5a1f]
          text-white font-bold uppercase
          px-5 py-2
          cursor-pointer
          shadow-[inset_0_2px_0_#7ed957,inset_0_-2px_0_#2a5a1f,0_4px_0_#1a1a1a]
          active:translate-y-[3px]
          active:shadow-[inset_0_2px_0_#2a5a1f]
          hover:brightness-110
          transition-all
        "
        onClick={() => clicouCategoria(categoria)}
      >
        {categoria}
      </button>
    </li>
  ))}
</ul>
    </>
  );
};

export default Categoria;


