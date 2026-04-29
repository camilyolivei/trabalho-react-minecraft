import React from "react";


function Destaque({ itemDestaque ,ativo,setAtivo}) {

    function desabilitar() {
        setAtivo(false)
        console.log(ativo)

    }

    return (
        <>
            <div className="destaque">
                <h1>Meus destaques</h1>
                {itemDestaque.map((itemD) => {
                    return ( 
                        <>
                        {ativo?<li key={itemD.id}>
                        <h1>{itemD.nome}</h1>
                        <h1>{itemD.categoria}</h1>
                        <h1>{itemD.descricao}</h1>
                        <button onClick={desabilitar}>Remover</button>
                     </li>:null}  </>
                    
                        
                    
                     
                )
                })}

            </div>

        </>
    );
}

export default Destaque;
