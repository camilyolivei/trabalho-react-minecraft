import React from "react";
import Card from "./Card";

const ListaCards = ({ itensExibidos, setItensExibidos }) => {
  return (
    <div className="w-full">
      {itensExibidos.length === 0 ? (
        <div className="w-full py-20 flex flex-col items-center justify-center gap-6 animate-pulse">
          <div className="text-8xl grayscale opacity-50">📦</div>
          <h2 className="text-4xl font-bold text-[#7a7a7a] drop-shadow-[2px_2px_0px_#000] uppercase">
            Baú Vazio...
          </h2>
          <p className="text-[#555] text-xl">Tente outra busca ou categoria!</p>
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4 animate-inventory">
          {itensExibidos.map((item, index) => (
            <Card
              key={index}
              item={item}
              itensExibidos={itensExibidos}
              setItensExibidos={setItensExibidos}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListaCards;
