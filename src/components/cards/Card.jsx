import { useState } from "react";
import itensMinecraft from "../../data/data";

export default function Card({ item , setItemDestaque,itemDestaque,setAtivo,ativo}) {
  if (!item) return null;
  


  function adicionarDestaque(item){
    let valores = [...itemDestaque,item]
      setItemDestaque(valores)
      console.log(itemDestaque)
    
      

    }
    
  return (
    <div className="group w-full h-full">





      <div
        className="
        relative w-full h-full
        p-4 sm:p-6
        flex flex-col items-center gap-4
        bg-black/70 border-[4px] border-[#373737]
        transition-all duration-300
        hover:border-[#8fca5c]
        hover:shadow-[0_0_20px_rgba(143,202,92,0.4)]
      "
      >
        <span
          className="
          absolute -top-3 left-2 sm:left-4
          bg-[#866043]
          border-2 border-black
          px-2 sm:px-3 py-1
          text-[10px] sm:text-xs font-bold uppercase text-white
          shadow-[2px_2px_0px_#000]
          z-20
          whitespace-nowrap overflow-hidden text-ellipsis max-w-[90%]
        "
        >
          {Array.isArray(item.categoria)
            ? item.categoria.join(" & ")
            : item.categoria.split(",").join(" & ")}
        </span>

        <div
          className="
          w-24 h-24 sm:w-32 sm:h-32
          bg-[#373737]
          border-[4px] border-black
          shadow-[inset_-4px_-4px_0px_#1a1a1a,inset_4px_4px_0px_#555]
          flex items-center justify-center
          p-3 sm:p-4 overflow-hidden
        "
        >
          <img
            src={item.url}
            alt={item.nome}
            className="
              w-full h-full object-contain
              transition-transform duration-300
              group-hover:scale-110
            "
            style={{ imageRendering: "pixelated" }}
          />
        </div>

        <div className="text-center w-full flex flex-col gap-2">
          <h2
            className="
            text-lg sm:text-2xl font-bold uppercase tracking-wider
            text-[#ffd83d]
            drop-shadow-[2px_2px_0px_#000]
            transition-colors
            group-hover:text-white
          "
          >
            {item.nome}
          </h2>

          {item.dano && (
            <p className="text-[#c6c6c6] text-xs sm:text-sm">
              Dano: {item.dano}
            </p>
          )}

          {item.cura && (
            <p className="text-[#c6c6c6] text-xs sm:text-sm">
              Cura: {item.cura}
            </p>
          )}

          <p
            className="
            text-[#c6c6c6] text-xs sm:text-sm
            leading-relaxed
            min-h-[40px]
            italic
            overflow-hidden
          "
          >
            "{item.descricao}"
          </p>
          <button onClick={()=> adicionarDestaque(item)} >Destaque</button>
        </div>
      </div>
    </div>
  );
}