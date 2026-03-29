export default function Card({ nome, descricao, dano, cura, categoria}) 
{
  return (
    <>
      <h2>Nome: {nome}</h2>
      <span>Categoria: {categoria}</span>
      {dano && <p>Dano: {dano}</p>}
      {cura && <p>Cura: {cura}</p>}
      <p>{descricao}</p>
    </>
  );
}

