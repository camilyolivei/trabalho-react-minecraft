import React from "react"; // Importa o React
import Card from "./Card"; // Importa o componente Card

// Componente que exibe a lista de cards
const ListaCards = ({ itensExibidos, setItensExibidos }) => {

  // Retorno do componente
  return (
    <div className="list-container"> {/* Container principal da lista */}

      {/* Verifica se não há itens para exibir */}
      {itensExibidos.length === 0 ? (

        // Estado vazio (quando não há itens)
        <div className="empty-state">

          {/* Ícone ilustrativo */}
          <div className="empty-icon">📦</div>

          {/* Título */}
          <h2 className="empty-title">
            Baú Vazio...
          </h2>

          {/* Subtítulo */}
          <p className="empty-subtitle">
            Tente outra busca ou categoria!
          </p>

        </div>

      ) : (

        // Lista de cards (quando existem itens)
        <ul className="cards-grid">

          {/* Percorre os itens exibidos e cria um Card para cada um */}
          {itensExibidos.map((item, index) => (

            <Card
              key={index} // Chave única para cada item (React usa para controle)
              item={item} // Item atual
              itensExibidos={itensExibidos} // Lista completa
              setItensExibidos={setItensExibidos} // Função para atualizar a lista
            />

          ))}

        </ul>

      )}
    </div>
  );
};

// Exporta o componente
export default ListaCards;