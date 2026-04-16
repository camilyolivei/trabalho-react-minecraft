export default function Card({ nome, categoria, descricao, dano, cura, url }) {
  return (
    <li className="bg-gray-800 border border-gray-600 p-4 rounded-lg text-white">
      <h2 className="text-lg font-bold text-green-400 mb-1">{nome}</h2>

      <span className="text-xs text-gray-300 mb-2 block">
        Categoria: {categoria}
      </span>

      {dano && <p className="text-sm">Dano: {dano}</p>}
      {cura && <p className="text-sm">Cura: {cura}</p>}

      <p className="text-sm mt-2">{descricao}</p>

      <img
        src={url}
        alt={nome}
        className="w-20 h-20 mt-4 border border-gray-700 mx-auto"
        style={{ imageRendering: "pixelated" }}
      />
    </li>
  );
}