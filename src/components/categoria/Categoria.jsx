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
              bg-gradient-to-b from-[#5aa33a] to-[#3d7a28]
              border-2 border-[#2a5a1f]
              text-white font-bold uppercase
              px-5 py-2 cursor-pointer
              transition-all
              ${categoriasSelecionadas.includes(categoria)
                ? "brightness-125 scale-105"
                : "opacity-80"}
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


