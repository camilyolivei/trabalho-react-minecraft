export default function Card({ nome, descricao, dano }) 
{
  return (
    <>
      <h2>{nome}</h2>
      <p>{descricao}</p>
      <span>Dano: {dano}</span>
    </>
  );
}

