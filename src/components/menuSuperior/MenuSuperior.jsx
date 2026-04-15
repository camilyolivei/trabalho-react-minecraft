import React from 'react'
import Categorias from '../categoria/Categorias'

const MenuSuperior = ({setItensExibidos,itensExibidos}) => {
  return (
    <>
      <header className="w-full bg-[#121212] border-b border-[#222] py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <Categorias
            setItensExibidos={setItensExibidos}
            itensExibidos={itensExibidos}
          />
        </div>
      </header>
    </>
  )
}

export default MenuSuperior