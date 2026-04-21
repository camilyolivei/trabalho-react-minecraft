import React from "react";
import itensMinecraft from "../../data/data.js";

const Categoria = ({ setItens, textoBusca }) => {

  const [categoriasSelecionadas, setCategoriasSelecionadas] =
    React.useState([]);

  const todasCategorias = itensMinecraft.flatMap(item => item.categoria);

  const categoriasUnicas = [
    "todos",
    ...new Set(todasCategorias),
  ];

  function clicouCategoria(categoria) {
    if (categoria === "todos") {
      setCategoriasSelecionadas([]);
      return;
    }

    setCategoriasSelecionadas((categoriaAtual) => {
      if (categoriaAtual.includes(categoria)) {
        return categoriaAtual.filter((cat) => cat !== categoria);
      } else {
        return [...categoriaAtual, categoria];
      }
    });
  }

  React.useEffect(() => {
    let filtrados = [...itensMinecraft];

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
      <div className="w-full flex flex-col items-center gap-3 p-6 sm:px-0 mb-10">
        <div className="flex flex-wrap justify-center gap-2">
          {categoriasUnicas.map((categoria) => {
            const isAtiva =
              (categoria === "todos" && categoriasSelecionadas.length === 0) ||
              categoriasSelecionadas.includes(categoria);

            return (
              <button
                key={categoria}
                onClick={() => clicouCategoria(categoria)}
                className={`cursor-pointer text-xs sm:text-sm uppercase font-bold px-4 py-2 rounded-md transition-all duration-200 whitespace-nowrap hover:scale-105 hover:shadow-lg ${
                  isAtiva
                    ? "bg-[#8FCA5C] text-[#000] border-2 border-[#000] shadow-[inset_-3px_-3px_0px_#357a2a,inset_3px_3px_0px_#fff] scale-105"
                    : "bg-[#222] text-[#eee] border border-[#444] hover:bg-[#333]"
                }`}
              >
                {categoria}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Categoria;