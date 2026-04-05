export default function Card({ nome, categoria, descricao, dano, cura, url }) {
  return (
    <li className="
      bg-[#2e2e2e]
      border-4 border-black
      rounded-lg
      p-4
      shadow-[0_6px_0_#0d0d0d]
      hover:-translate-y-1
      hover:shadow-[0_10px_0_#0d0d0d]
      transition-all
      text-white
    ">
      <h2 className="text-green-400 text-lg font-bold mb-1">{nome}</h2>

      <span className="text-xs text-gray-300 block mb-2">
        Categoria: {categoria}
      </span>

      {dano && <p className="text-sm">Dano: {dano}</p>}
      {cura && <p className="text-sm">Cura: {cura}</p>}

      <p className="text-sm mt-2">{descricao}</p>

      <img
        src={url}
        alt={nome}
        className="w-20 h-20 mx-auto mt-4 border-2 border-black bg-[#111]"
        style={{ imageRendering: "pixelated" }}
      />
    </li>
  );
}