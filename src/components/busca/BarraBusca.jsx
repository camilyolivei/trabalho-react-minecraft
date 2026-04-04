import React from 'react'
import itensMinecraft from '../../data/data'

const BarraBusca = ({ setItens }) => {

    // Função que atualiza a lista de itens exibidos com base no que o usuário digitou
    function aoDigitarNoCampoDePesquisa(evento) {
        // Pega o texto digitado, remove espaços extras e transforma em letras minúsculas
        const textoDigitado = evento.target.value.toLowerCase().trim()

        // Filtra os itens que contêm o texto digitado
        const itensFiltrados = itensMinecraft.filter((item) => 
            item.nome.toLowerCase().includes(textoDigitado)
        )

        // Atualiza os itens visíveis
        setItens(itensFiltrados)
    }

    return (
        <>
            <label htmlFor="busca">Pesquisar item:</label>
            <input 
                type="text" 
                name="busca" 
                id="busca" 
                onChange={aoDigitarNoCampoDePesquisa} 
            />
        </>
    )
}

export default BarraBusca