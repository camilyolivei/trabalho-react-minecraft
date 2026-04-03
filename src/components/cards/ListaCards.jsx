import Card from "./Card";

const ListaCards = ({ itens }) => {
  return (
    <>
      <ul>
        {itens.map(({ nome, categoria, descricao, dano, cura,url },index) => (
          <Card key={index}  nome={nome} categoria={categoria} descricao={descricao} dano={dano} cura={cura} url={url}/>
        ))}
      </ul>
    </>
  );
};

export default ListaCards;
