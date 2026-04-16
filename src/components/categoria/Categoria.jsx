import React from "react";
import itensMinecraft from "../../data/data.js";

const Categoria = ({ setItens, textoBusca }) => {

  const [categoriasSelecionadas, setCategoriasSelecionadas] =
    React.useState([]);

  const todasCategorias = itensMinecraft.reduce((acc, item) => {
    return acc.concat(item.categoria);
  }, []);

  const categoriasUnicas = [
    "todos",
    ...new Set(todasCategorias),
  ];

  function clicouCategoria(categoria) {
    if (categoria === "todos") {
      setCategoriasSelecionadas([]);
      return;
    }

    setCategoriasSelecionadas((prev) => {
      if (prev.includes(categoria)) {
        return prev.filter((cat) => cat !== categoria);
      } else {
        return [...prev, categoria];
      }
    });
  }

  React.useEffect(() => {
    
    let filtrados = [...itensMinecraft];

    // FILTRO DE CATEGORIA
    if (categoriasSelecionadas.length > 0) {
      filtrados = filtrados.filter((item) =>
        categoriasSelecionadas.every((catSelecionada) =>
           item.categoria.includes(catSelecionada)
        )
      ); 
    }

    if (textoBusca.trim() !== "") {
      filtrados = filtrados.filter((item) =>
        item.nome.toLowerCase().includes(textoBusca.toLowerCase())
      );
    }

    setItens(filtrados);
  }, [categoriasSelecionadas, textoBusca]);

  return (
    <>
      <ul className="flex justify-center flex-wrap gap-3 mb-10">
        {categoriasUnicas.map((categoria) => (
          <li key={categoria}>
            <button
              className={`
                px-5 py-2 font-bold uppercase text-white
                border-[3px] border-[#1b5e20]
                bg-gradient-to-b from-[#4caf50] to-[#2e7d32]
                transition-all duration-150

                ${categoriasSelecionadas.includes(categoria)
                ? "enchanted scale-105 ring-2 ring-purple-400"
                : ""}
              `}
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


