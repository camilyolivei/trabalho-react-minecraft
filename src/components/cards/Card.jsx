export default function Card({ nome, categoria, descricao, dano, cura, url }) {
  return (
    <li className="
     bg-black/70
     border-[4px] border-[#373737]
     transition-all duration-200
     hover:border-[#48ad39]
     hover:scale-105
     hover:z-10
    ">
      <h2 className="text-green-400 text-lg font-bold mb-1">{nome}</h2>

      <span className="text-xs text-gray-300 block mb-2">
        Categoria:
        <div className="flex gap-1 mt-1 flex-wrap">
          {categoria.map((cat) => (
          <span
            key={cat}
            className="bg-green-700 px-2 py-1 rounded text-white text-xs"
      >
            {cat}
          </span>
          ))}
        </div>
      </span>

      {dano && <p className="text-sm">Dano: {dano}</p>}
      {cura && <p className="text-sm">Cura: {cura}</p>}

      <p className="text-sm mt-2">{descricao}</p>

      <div className="
        w-24 h-24
        mx-auto mt-4
        bg-[#c6c6c6]
        border-[3px] border-black
        flex items-center justify-center
        shadow-[inset_-3px_-3px_0px_#555,inset_3px_3px_0px_#fff]">
        
        <img
          src={url}
          alt={nome}
          className="w-16 h-16"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>
    </li>
  );
}