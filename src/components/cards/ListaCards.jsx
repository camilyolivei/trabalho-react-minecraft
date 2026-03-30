import React from "react";
import Card from "./Card";

const ListaCards = ({ itens }) => {
  return (
    <>
      <ul>
        {itens.map(({ id, nome, categoria, descricao, dano, cura }) => (
          <Card
            key={id}
            id={id}
            nome={nome}
            categoria={categoria}
            descricao={descricao}
            dano={dano}
            cura={cura}
          />
        ))}
      </ul>
    </>
  );
};

export default ListaCards;
