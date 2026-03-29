import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'
import { itensMinecraft } from './data/data.js'


function App() {
    const [categoria, setCategoria]=useState("Todas")
    const itensFiltrados=categoria==="Todas"?itensMinecraft:itensMinecraft.filter((item)=>{
        return item.categoria===categoria
    })
    
  return (
    <>
        <h2>Itens do Minecraft!!</h2>
        <select value={categoria} onChange={(e)=>setCategoria(e.target.value)}>
            <option value="Todas">Todas</option>
            <option value="ferramenta">ferramenta</option>
            <option value="alimento">alimento</option>
            <option value="bloco">bloco</option>
        </select>
        
        <div>
             {itensFiltrados.map((i)=>{
                 return <Card key={i.id} nome={i.nome} dano={i.dano} descricao={i.descricao} categoria={i.categoria} cura={i.cura}/>
             })}
       </div>
    </>
  )
}

export default App
