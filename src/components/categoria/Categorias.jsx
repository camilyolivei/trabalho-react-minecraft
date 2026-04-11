import React from 'react';
import itensMinecraft from '../../data/data'; 
const Categorias = ({ setItensExibidos }) => {

    // Cria um array de categorias únicas (objeto nativo)
    const categorias = ['Todos', ...new Set(itensMinecraft.map(item => item.categoria))];

    // Estado para armazenar a categoria atualmente selecionada
    const [categoriaAtiva, setCategoriaAtiva] = React.useState('Todos');

    // Função para filtrar os itens pela categoria clicada
    const filtrarCategoria = (categoria) => {

        // Atualiza a categoria ativa (para controle visual)
        setCategoriaAtiva(categoria);

        // Se for "Todos", exibe todos os itens
        if (categoria === 'Todos') {
            setItensExibidos(itensMinecraft);

        } else {
            // Filtra os itens pela categoria selecionada
            const filtrados = itensMinecraft.filter(item => item.categoria === categoria);

            // Atualiza os itens exibidos
            setItensExibidos(filtrados);
        }
    };
    return (
        <div className="categories-container"> {/* Container principal */}

            <div className="categories-list"> {/* Lista de botões */}

                {/* Percorre todas as categorias */}
                {categorias.map((categoria,index) => (
                    /*Quando clicar em determinada categoria, os item será filtrado
                    de acordo com a categoria clicada */
                    <button
                        key={index}
                        onClick={() => filtrarCategoria(categoria)}>
                        {categoria} 
                    </button>
                ))}
            </div>
        </div>
    );
};


export default Categorias;