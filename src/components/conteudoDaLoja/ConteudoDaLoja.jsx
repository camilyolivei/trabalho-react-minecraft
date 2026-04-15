import React from 'react';
import ListaCards from '../cards/ListaCards';

const ConteudoDaLoja = ({ setItensExibidos, itensExibidos }) => {
  return (
    <main className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col gap-12">
        <h2 className="text-3xl font-bold uppercase tracking-widest text-[#8FCA5C] ml-4">
          Itens Disponíveis
        </h2>

        <ListaCards
          setItensExibidos={setItensExibidos}
          itensExibidos={itensExibidos}
        />
      </div>
    </main>
  );
};

export default ConteudoDaLoja;