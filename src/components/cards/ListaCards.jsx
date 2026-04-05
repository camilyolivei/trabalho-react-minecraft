import Card from "./Card";

export default function ListaCards({ itens }) {
  return (
    <ul className="grid grid-cols-2 gap-4 p-4">
      {itens.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </ul>
  );
}