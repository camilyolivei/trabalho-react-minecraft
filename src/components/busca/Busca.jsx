import React from "react";

const Busca = ({setTextoBusca,textoBusca}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar item..."
        value={textoBusca}
        onChange={(e) => setTextoBusca(e.target.value)}
        className="block mx-auto w-11/12 max-w-md p-3 rounded-lg mb-6  border border-gray-300"
      />
    </div>
  );
};

export default Busca;
