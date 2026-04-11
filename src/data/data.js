// Importações das imagens
import appleImg from "../assets/imagens/apple.png";
import rawBeefImg from "../assets/imagens/raw_beef.png";
import goldenAppleImg from "../assets/imagens/golden_apple.png";
import diamondPickaxeImg from "../assets/imagens/diamond_pickaxe.png";
import redstoneImg from "../assets/imagens/redstone.png";
import boneImg from "../assets/imagens/bone.png";
import amethystShardImg from "../assets/imagens/amethyst_shard.png";
import goldenSwordImg from "../assets/imagens/golden_sword.png";
import wheatImg from "../assets/imagens/wheat.png";
import netherPortal from "../assets/imagens/nether_portal.png";
const itensMinecraft = [
  {
    id: 1,
    nome: "Maçã",
    categoria: "alimento",
    cura: 4,
    descricao: "Alimento simples que recupera um pouco da fome.",
    url: appleImg,
  },
  {
    id: 2,
    nome: "Osso",
    categoria: "material",
    descricao: "Pode ser transformado em farelo de osso para fertilizante.",
    url: boneImg,
  },
  {
    id: 3,
    nome: "Carne Crua",
    categoria: "alimento",
    cura: 3,
    descricao: "Carne bovina que pode ser cozida para melhor efeito.",
    url: rawBeefImg,
  },
  {
    id: 4,
    nome: "Maçã Dourada",
    categoria: "alimento",
    cura: 4,
    descricao: "Item premium que concede efeitos de regeneração e resistência.",
    url: goldenAppleImg,
  },
  {
    id: 5,
    nome: "Picareta de Diamante",
    categoria: "ferramenta",
    dano: 5,
    descricao: "A melhor ferramenta para minerar qualquer minério.",
    url: diamondPickaxeImg,
  },
  {
    id: 6,
    nome: "Fragmento de Ametista",
    categoria: "material",
    descricao: "Cristal roxo brilhante obtido em geodos.",
    url: amethystShardImg,
  },
  {
    id: 7,
    nome: "Redstone",
    categoria: "material",
    descricao: "Pó condutor usado em circuitos e mecanismos.",
    url: redstoneImg,
  },

  {
    id: 8,
    nome: "Espada de Ouro",
    categoria: "arma",
    dano: 4,
    descricao: "Muito rápida e elegante, mas com baixa durabilidade.",
    url: goldenSwordImg,
  },
  {
    id: 9,
    nome: "Portal do Nether",
    categoria: "bloco",
    descricao:
      "Uma estrutura mística que serve como passagem para a dimensão do Nether.",
    url: netherPortal,
  },
  {
    id: 10,
    nome: "Trigo",
    categoria: "material",
    descricao: "Usado para fazer pães ou atrair animais.",
    url: wheatImg,
  },
];

export default itensMinecraft;
