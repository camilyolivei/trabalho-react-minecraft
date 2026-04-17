import React from "react";
import MenuSuperior from "../menuSuperior/MenuSuperior";
import BarraBusca from "../busca/BarraBusca";
import itensMinecraft from "../../data/data";

const BuscaCategoria = ({ setItensExibidos }) => {
  const [valorDaBusca, setValorDaBusca] = React.useState("");
  const [listaCategorias, setListaCategorias] = React.useState([]);

  React.useEffect(() => {
    const buscaCategoriaFiltrados = itensMinecraft.filter((item) => {
      const correspondeBusca = item.nome
        .toLowerCase()
        .trim()
        .includes(valorDaBusca);

      const correspondecategoria =
        listaCategorias.length === 0 ||
        listaCategorias.some((cat) =>
          item.categoria.some(
            (itemCat) => itemCat.toLowerCase().trim() === cat,
          ),
        );

      return correspondeBusca && correspondecategoria;
    });

    setItensExibidos(buscaCategoriaFiltrados);
  }, [listaCategorias, valorDaBusca, setItensExibidos]);

  const filtrarCategoria = (categoria) => {
    const categoriaFormatada = categoria.toLowerCase().trim();

    if (categoriaFormatada === "todos") {
      setListaCategorias([]);
      return;
    }

    setListaCategorias((categoriasAtual) => {
      if (categoriasAtual.includes(categoriaFormatada)) {
        return categoriasAtual.filter(
          (categoria) => categoria !== categoriaFormatada,
        );
      } else {
        return [...categoriasAtual, categoriaFormatada];
      }
    });
  };

  function aoDigitarNoCampoDePesquisa(evento) {
    setValorDaBusca(evento.target.value.toLowerCase().trim());
  }

  return (
    <div>
      <MenuSuperior
        filtrarCategoria={filtrarCategoria}
        categoriaAtiva={listaCategorias}
      />
      <BarraBusca aoDigitarNoCampoDePesquisa={aoDigitarNoCampoDePesquisa} />
    </div>
  );
};

export default BuscaCategoria;
