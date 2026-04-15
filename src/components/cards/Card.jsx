import React from "react";

export default function Card({ item, itensExibidos, setItensExibidos }) {
  if (!item || !itensExibidos) return null;

  return (
    <li className="list-none group">
      <div className="mc-card relative p-6 rounded-none flex flex-col items-center gap-4 transition-all duration-300 hover:shadow-[0_0_20px_rgba(143,202,92,0.4)] h-full">

        <span className="absolute -top-3 left-4 bg-[#866043] border-2 border-[#000] px-3 py-1 text-xs font-bold uppercase text-[#fff] shadow-[2px_2px_0px_#000] z-20">
          {item.categoria}
        </span>

        <div className="w-32 h-32 bg-[#373737] border-4 border-[#000] shadow-[inset_-4px_-4px_0px_#1a1a1a,inset_4px_4px_0px_#555] flex items-center justify-center p-4 overflow-hidden relative">
          <img
            src={item.url}
            alt={item.nome}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
            style={{ imageRendering: "pixelated" }}
          />
        </div>

        <div className="text-center w-full flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-[#ffd83d] drop-shadow-[2px_2px_0px_#000] uppercase tracking-wider group-hover:text-[#fff] transition-colors">
            {item.nome}
          </h2>

          {item.dano && (
            <p className="text-[#c6c6c6] text-sm">
              Dano: {item.dano}
            </p>
          )}

          {item.cura && (
            <p className="text-[#c6c6c6] text-sm">
              Cura: {item.cura}
            </p>
          )}

          <p className="text-[#c6c6c6] text-sm leading-relaxed min-h-[40px] italic">
            "{item.descricao}"
          </p>
        </div>

      </div>
    </li>
  );
}