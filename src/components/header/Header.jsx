import Busca from "../busca/Busca";

export default function Header ({textoBusca,setTextoBusca}){
return(
    <>
        <h1  className=" text-6xl md:text-7xl font-extrabold text-center mt-8 mb-4 text-[#2e7d32] tracking-widest drop-shadow-[4px_4px_0_#0d0d0d] " id="title">
            Minecraft Itens
        </h1>

        <h2 className="text-2xl text-center text-[#1b5e20] font-bold mb-6 tracking-wide" id="sub-title">
            Catálogo de Itens
        </h2>

        <Busca textoBusca={textoBusca} setTextoBusca={setTextoBusca}/>
    </>
)
}