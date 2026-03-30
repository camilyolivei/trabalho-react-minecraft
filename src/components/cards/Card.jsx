export default function Card({nome, categoria, descricao, dano, cura,excluir}) {
  return (
    <>
      <li>
        <h2>Nome: {nome}</h2>
        <span>Categoria: {categoria}</span>
        {dano && <p>Dano: {dano}</p>}
        {cura && <p>Cura: {cura}</p>}
        <p>{descricao}</p>
      </li>
    </>
  );
}
