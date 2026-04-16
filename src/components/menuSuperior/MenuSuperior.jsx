import React from 'react'
import Categorias from '../categoria/Categorias'

const MenuSuperior = ({filtrarCategoria,categoriaAtiva}) => {
  return (
    <>
      <header className="w-full bg-[#121212] border-b border-[#222] py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <Categorias
            filtrarCategoria={filtrarCategoria} categoriaAtiva={categoriaAtiva}
          />
        </div>
      </header>
    </>
  )
}

export default MenuSuperior