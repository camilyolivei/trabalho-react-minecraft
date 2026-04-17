
import itensMinecraft from '../../data/data';


const BarraBusca = ({ setItensExibidos }) => {

    // Função chamada toda vez que o usuário digita no campo
    function aoDigitarNoCampoDePesquisa(texto) {

        // Pega o valor digitado, transforma em minúsculo e remove espaços extras
        const textoDigitado = texto.target.value.toLowerCase().trim();

        // Filtra os itens verificando se o nome inclui o texto digitado
        const itensFiltrados = itensMinecraft.filter((item) => 
            item.nome.toLowerCase().includes(textoDigitado)
        );

        // Atualiza os itens exibidos na tela
        setItensExibidos(itensFiltrados);
    }

   
    return (
        <div className="search-container"> {/* Container principal da busca */}
            
            <div className="search-input-wrapper"> {/* Wrapper do input */}

                {/* Ícone de lupa */}
                <div className="search-icon">
                    <svg 
                        fill="none" // Sem preenchimento
                        stroke="currentColor" // Cor da linha baseada no CSS
                        viewBox="0 0 24 24" // Área de visualização do SVG
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* Círculo da lupa */}
                        <circle 
                            cx="11" // Posição X
                            cy="11" // Posição Y
                            r="7"   // Raio
                            strokeWidth="2" // Espessura da linha
                            strokeLinecap="square" // Estilo da ponta da linha
                        />

                        {/* Cabo da lupa */}
                        <path 
                            strokeLinecap="square"
                            strokeLinejoin="miter"
                            strokeWidth="2"
                            d="M21 21l-4.5-4.5" // Desenho do caminho
                        />
                    </svg>
                </div>

                {/* Campo de input */}
                <input 
                    type="text"
                    name="busca"
                    id="busca" 
                    placeholder="Qual item você procura?"
                    onChange={aoDigitarNoCampoDePesquisa} // Evento ao digitar
                    className="search-input"
                    style={{ fontFamily: '"Noto Sans", sans-serif' }}
                />
            </div>
        </div>
    );
}

export default BarraBusca;