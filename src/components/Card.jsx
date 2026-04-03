export default function Card({ nome, descricao, dano, cura, categoria, url}) 
{
  return (
    <>
      <img src={imagem} alt={nome} width="100" />
      <h2>Nome: {nome}</h2>
      <span>Categoria: {categoria}</span>
      {dano && <p>Dano: {dano}</p>}
      {cura && <p>Cura: {cura}</p>}
      <p>{descricao}</p>
    </>
  );
}

