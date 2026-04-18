export default function Card({ item }) {
  return (
    <li className="list-none group">
      <div className="
        relative p-6 flex flex-col items-center gap-4 h-full
        bg-black/70 border-[4px] border-[#373737]
        transition-all duration-300
        hover:border-[#8fca5c]
        hover:shadow-[0_0_20px_rgba(143,202,92,0.4)]
        ">

        <span className="
          absolute -top-3 left-4
          bg-[#866043]
          border-2 border-black
          px-3 py-1
          text-xs font-bold uppercase text-white
          shadow-[2px_2px_0px_#000]
          z-20
          ">
            {Array.isArray(item.categoria)
            ? item.categoria.join(" & ")
            : item.categoria}
        </span>

        <div className="
          w-32 h-32
          bg-[#373737]
          border-[4px] border-black
          shadow-[inset_-4px_-4px_0px_#1a1a1a,inset_4px_4px_0px_#555]
          flex items-center justify-center
          p-4 overflow-hidden
          ">
            <img
              src={item.url}
              alt={item.nome}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              style={{ imageRendering: "pixelated" }}
            />
      </div>

        <div className="text-center w-full flex flex-col gap-2">
          <h2 className="
            text-2xl font-bold uppercase tracking-wider
            text-[#ffd83d]
            drop-shadow-[2px_2px_0px_#000]
            group-hover:text-white
            transition-colors
          ">
            {item.nome}
          </h2>

          {item.dano && (
            <p className="text-[#c6c6c6] text-sm">Dano: {item.dano}</p>
          )}

          {item.cura && (
            <p className="text-[#c6c6c6] text-sm">Cura: {item.cura}</p>
          )}

          <p className="text-[#c6c6c6] text-sm leading-relaxed min-h-[40px] italic">
            "{item.descricao}"
          </p>
        </div>
      </div>
    </li>
  );
}