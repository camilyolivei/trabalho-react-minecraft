
import itensMinecraft from '../../data/data';


const BarraBusca = ({ setItensExibidos }) => {


    function aoDigitarNoCampoDePesquisa(texto) {

        
        const textoDigitado = texto.target.value.toLowerCase().trim();

        
        const itensFiltrados = itensMinecraft.filter((item) => 
            item.nome.toLowerCase().includes(textoDigitado)
        );

        // Atualiza os itens exibidos na tela
        setItensExibidos(itensFiltrados);
    }

   
    return (
        <div className="search-container"> 
            
            <div className="search-input-wrapper"> 

               
                <div className="search-icon">
                    <svg 
                        fill="none"
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                       
                        <circle 
                            cx="11" 
                            cy="11" 
                            r="7"   
                            strokeWidth="2"
                            strokeLinecap="square" 
                        />

                     
                        <path 
                            strokeLinecap="square"
                            strokeLinejoin="miter"
                            strokeWidth="2"
                            d="M21 21l-4.5-4.5" 
                        />
                    </svg>
                </div>

                
                <input 
                    type="text"
                    name="busca"
                    id="busca" 
                    placeholder="Qual item você procura?"
                    onChange={aoDigitarNoCampoDePesquisa} 
                    className="search-input"
                    style={{ fontFamily: '"Noto Sans", sans-serif' }}
                />
            </div>
        </div>
    );
}

export default BarraBusca;