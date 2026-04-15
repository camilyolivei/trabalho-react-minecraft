import React from 'react';
import itensMinecraft from '../../data/data';

const BarraBusca = ({ setItensExibidos }) => {

    function aoDigitarNoCampoDePesquisa(evento) {
        const textoDigitado = evento.target.value.toLowerCase().trim();
        const itensFiltrados = itensMinecraft.filter((item) => 
            item.nome.toLowerCase().includes(textoDigitado)
        );
        setItensExibidos(itensFiltrados);
    }

    return (
        <section className="w-full bg-[#121212] py-2 border-b border-[#222]">
            <div className="w-full max-w-5xl mx-auto flex flex-col gap-2 p-1 mt-2 mb-2">
                <div className="relative w-full bg-[#000000] border border-[#333333] h-12 flex items-center group transition-colors focus-within:border-[#666] rounded-md">

                    <div className="absolute left-3 flex items-center">
                        <svg 
                            className="w-6 h-6 text-white opacity-100 pixel-icon" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <circle cx="11" cy="11" r="7" strokeWidth="2" />
                            <path strokeWidth="2" d="M21 21l-4.5-4.5" />
                        </svg>
                    </div>

                    <input 
                        type="text"
                        name="busca"
                        id="busca"
                        placeholder="Qual item você procura?"
                        onChange={aoDigitarNoCampoDePesquisa}
                        className="w-full h-full bg-transparent pl-10 pr-4 text-lg text-white placeholder-[#777777] focus:outline-none"
                    />
                </div>
            </div>
        </section>
    );
}

export default BarraBusca;