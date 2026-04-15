import React from 'react';
import itensMinecraft from '../../data/data';

const Categorias = ({ setItensExibidos }) => {
    const categorias = ['Todos', ...new Set(itensMinecraft.map(item => item.categoria))];
    const [categoriaAtiva, setCategoriaAtiva] = React.useState('Todos');

    const filtrarCategoria = (categoria) => {
        setCategoriaAtiva(categoria);
        if (categoria === 'Todos') {
            setItensExibidos(itensMinecraft);
        } else {
            const filtrados = itensMinecraft.filter(item => item.categoria === categoria);
            setItensExibidos(filtrados);
        }
    };

    return (
        <div className="w-full flex flex-col items-center gap-3 px-2 sm:px-0">
            <div className="flex flex-wrap justify-center gap-2">
                {categorias.map((categoria) => (
                    <button
                        key={categoria}
                        onClick={() => filtrarCategoria(categoria)}
                        className={`cursor-pointer text-xs sm:text-sm uppercase font-bold px-4 py-2 rounded-md transition-all duration-200 whitespace-nowrap hover:scale-105 hover:shadow-lg ${
                            categoriaAtiva === categoria 
                            ? 'bg-[#8FCA5C] text-[#000] border-2 border-[#000] shadow-[inset_-3px_-3px_0px_#357a2a,inset_3px_3px_0px_#fff] transform scale-105' 
                            : 'bg-[#222] text-[#eee] border border-[#444] hover:bg-[#333]'
                        }`}
                    >
                        {categoria}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Categorias;