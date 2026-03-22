import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'
import { ferramentas } from './data/data.js'


function App() {
  return (
    <>
       {ferramentas.map((f, index)=>{
           return <Card key={index} nome={f.nome} dano={f.dano} descricao={f.descricao}/>
       })}
    </>
  )
}

export default App