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
        <h1>Minecraft</h1>
        <h3>Principais Itens do Jogo</h3>
        
        <div style={{display: "flex", justifyContent: "space-evenly"}}>
        <button onClick={(e)=>setCategoria("Todas")}>Todas</button>
        <button onClick={(e)=>setCategoria("ferramenta")}>Ferramenta</button>
        <button onClick={(e)=>setCategoria("alimento")}>Alimento</button>
        <button onClick={(e)=>setCategoria("bloco")}>Bloco</button>
        </div>
        
        <div>
             {itensFiltrados.map((i)=>{
                 return <Card key={i.id} nome={i.nome} dano={i.dano} descricao={i.descricao} categoria={i.categoria} cura={i.cura}/>
             })}
       </div>
    </>
  )
}

export default App
