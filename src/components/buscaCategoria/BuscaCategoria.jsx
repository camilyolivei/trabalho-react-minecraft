import React from "react";
import MenuSuperior from "../menuSuperior/MenuSuperior";
import BarraBusca from "../busca/BarraBusca";
import itensMinecraft from "../../data/data";

const BuscaCategoria = ({setItensExibidos}) => {
  const [categoriaAtiva, setCategoriaAtiva] = React.useState("Todos");
  const [valorDaBusca, setValorDaBusca] = React.useState("");

  React.useEffect(() => {
    const buscaCategoriaFiltrados = itensMinecraft.filter((item) => {
      const correspondeBusca = item.nome
        .toLowerCase()
        .trim()
        .includes(valorDaBusca);

      const correspondecategoria =
        categoriaAtiva === "Todos" || item.categoria.includes(categoriaAtiva);

      return correspondeBusca && correspondecategoria;
    });
    setItensExibidos(buscaCategoriaFiltrados);
  }, [categoriaAtiva, valorDaBusca]);

  const filtrarCategoria = (categoria) => {
    setCategoriaAtiva(categoria.toString().trim());
  };

  function aoDigitarNoCampoDePesquisa(evento) {
    setValorDaBusca(evento.target.value.toLowerCase().trim());
  }
  return(
    <div>
        <MenuSuperior filtrarCategoria={filtrarCategoria} categoriaAtiva={categoriaAtiva}/>

        <BarraBusca aoDigitarNoCampoDePesquisa={aoDigitarNoCampoDePesquisa} />
    </div>
  ) 

  
};

export default BuscaCategoria;
