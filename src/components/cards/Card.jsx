export default function Card({ nome, categoria, descricao, dano, cura, url }) {
  return (
    <>
      <li>
        <h2>Nome: {nome}</h2>
        <span>Categoria: {categoria}</span>
        {dano && <p>Dano: {dano}</p>}
        {cura && <p>Cura: {cura}</p>}
        <p>{descricao}</p>
        <img
          src={url}
          alt={nome}
          style={{
            imageRendering: "pixelated",
            width: "100px",
            height: "100px",
          }}
        />
      </li>
    </>
  );
}
