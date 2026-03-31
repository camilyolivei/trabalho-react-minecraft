import Card from "./Card";

const ListaCards = ({ itens }) => {
  return (
    <>
      <ul>
        {itens.map(({ id, nome, categoria, descricao, dano, cura,url }) => (
          <Card key={id}  nome={nome} categoria={categoria} descricao={descricao} dano={dano} cura={cura} url={url}/>
        ))}
      </ul>
    </>
  );
};

export default ListaCards;
