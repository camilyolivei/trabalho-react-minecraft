import Card from "./Card";

export default function ListaCards({ itens }) {
  return (
    <div className="w-full px-4 mb-[3rem]">
      {itens.length === 0 ? (
        <div className="w-full py-20 flex flex-col items-center justify-center gap-6 animate-pulse">
          <div className="text-8xl grayscale opacity-50">📦</div>
          <h2 className="text-4xl font-bold text-[#7a7a7a] drop-shadow-[2px_2px_0px_#000] uppercase">
            Baú Vazio...
          </h2>
          <p className="text-[#555] text-xl">Tente outra busca ou categoria!</p>
        </div>
      ) : (
        <ul
          className="
            flex overflow-x-auto gap-6 py-4
            scrollbar-hide

            sm:grid sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4

            max-w-6xl mx-auto
          "
        >
          {itens.map((item) => (
            <li
              key={item.id}
              className="
    w-[240px] min-w-[240px] max-w-[240px]
    flex-shrink-0
    sm:w-auto sm:min-w-0 sm:max-w-none
  "
            >
              <Card item={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
