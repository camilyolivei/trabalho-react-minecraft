import React from "react"; // Importa o React

export default function Card({ item, itensExibidos, setItensExibidos }) {

  // Verifica se item ou itensExibidos não existem
  // Se não existirem, não renderiza nada
  if (!item || !itensExibidos) return null;

  // Retorno do componente (estrutura do card)
  return (
    <li className="card-item"> {/* Item da lista */}

      <div className="mc-card"> {/* Container principal do card */}

        {/* Categoria do item */}
        <span className="card-category">
          {item.categoria}
        </span>

        {/* Container da imagem */}
        <div className="card-image-wrapper">
          <img
            src={item.url} // URL da imagem
            alt={item.nome} // Texto alternativo
            className="card-image" // Classe CSS da imagem
          />
        </div>

        {/* Conteúdo do card */}
        <div className="card-content">

          {/* Nome do item */}
          <h2 className="card-title">
            {item.nome}
          </h2>

          {/* Descrição do item */}
          <p className="card-desc">
            "{item.descricao}"
          </p>

        </div>
      </div>
    </li>
  );
}