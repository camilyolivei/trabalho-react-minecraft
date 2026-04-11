// Importações das imagens
import appleImg from "../assets/imagens/apple.png";
import rawBeefImg from "../assets/imagens/raw_beef.png";
import goldenAppleImg from "../assets/imagens/golden_apple.png";
import diamondPickaxeImg from "../assets/imagens/diamond_pickaxe.png";
import redstoneImg from "../assets/imagens/redstone.png";
import boneImg from "../assets/imagens/bone.png";
import amethystShardImg from "../assets/imagens/amethyst_shard.png";
import goldenSwordImg from "../assets/imagens/golden_sword.png";
import stoneShovelImg from "../assets/imagens/Stone_Shovel.png";
import bowImg from "../assets/imagens/Bow.png";
import crossbowImg from "../assets/imagens/Crossbow.png";
import ironAxeImg from "../assets/imagens/Iron_Axe.png";
import coalImg from "../assets/imagens/Coal.png";
import ironIngotImg from "../assets/imagens/Iron_Ingot.png";
import goldIngotImg from "../assets/imagens/Gold_Ingot.png";
import gunpowderImg from "../assets/imagens/Gunpowder.png";

const itensMinecraft = [
  {
    id: 1,
    nome: "Maçã",
    categoria: "alimento",
    cura: 4,
    descricao: "Alimento simples que recupera um pouco da fome.",
    url: appleImg
  },
  {
    id: 2,
    nome: "Carne Crua",
    categoria: "alimento",
    cura: 3,
    descricao: "Carne bovina que pode ser cozida para melhor efeito.",
    url: rawBeefImg
  },
  {
    id: 3,
    nome: "Maçã Dourada",
    categoria: "alimento",
    cura: 4,
    descricao: "Item premium que concede efeitos de regeneração e resistência.",
    url: goldenAppleImg
  },
  {
    id: 4,
    nome: "Picareta de Diamante",
    categoria: "ferramenta",
    dano: 5,
    descricao: "A melhor ferramenta para minerar qualquer minério.",
    url: diamondPickaxeImg
  },
  {
    id: 5,
    nome: "Redstone",
    categoria: "minério",
    descricao: "Pó condutor usado em circuitos e mecanismos.",
    url: redstoneImg
  },
  {
    id: 6,
    nome: "Osso",
    categoria: "drop",
    descricao: "Pode ser transformado em farelo de osso para fertilizante.",
    url: boneImg
  },
  {
    id: 7,
    nome: "Fragmento de Ametista",
    categoria: "minério",
    descricao: "Cristal roxo brilhante obtido em geodos.",
    url: amethystShardImg
  },
  {
    id: 8,
    nome: "Espada de Ouro",
    categoria: "arma",
    dano: 4,
    descricao: "Muito rápida e elegante, mas com baixa durabilidade.",
    url: goldenSwordImg
  },
  {
    id: 9,
    nome: "Polvora",
    categoria: "drop",
    descricao: "Material explosivo usado para criar TNT e foguetes.",
    url: gunpowderImg
  },
  {
    id: 10,
    nome: "Carvão",
    categoria: "minério",
    descricao: "Combustível comum usado para acender fornos e criar tochas.",
    url: coalImg
  },
  {
    id: 11,
    nome: "Pá de Pedra",
    categoria: "ferramenta",
    dano: 3,
    descricao: "Ferramenta simples de pedra usada para cavar terra, areia e cascalho com eficiência.",
    url: stoneShovelImg
  },
  {
    id: 12,
    nome: "Arco",
    categoria: "arma",
    dano: "1-11",
    descricao: "Arma de longo alcance. Fica mais forte quanto mais tempo a corde é puxada.",
    url: bowImg
  },
  {
    id: 13,
    nome: "Besta",
    categoria: "arma",
    dano: "6-11",
    descricao: "Dispara mais forte e rapido que o arco, porem demora mais para recarregar.",
    url: crossbowImg
  },
  {
    id: 14,
    nome: "Machado de Ferro",
    categoria: "ferramenta",
    dano: 9,
    descricao: "Ferramenta para cortar madeira.Golpe pesado e forte, mas mais lento que a espada.",
    url: ironAxeImg
  },
  {
    id: 15,
    nome: "Barra de Ferro",
    categoria: "minério",
    descricao: "Metal resistente usado em ferramentas, armaduras e estruturas.",
    url: ironIngotImg
  },
  {
    id: 16,
    nome: "Barra de Ouro",
    categoria: "minério",
    descricao: "Metal valioso usado em trocas, itens especiais e trilhos",
    url: goldIngotImg
  }
];

export default itensMinecraft
