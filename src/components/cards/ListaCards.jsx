import Card from "./Card";

export default function ListaCards({ itens }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {itens.map((item) => (
      <Card key={item.id} item={item} />
      ))}
    </ul>
  );
}
