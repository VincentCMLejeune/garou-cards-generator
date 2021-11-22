import GarouImg from "../../media/garou.png";
import VillageoisImg from "../../media/villageois.png";
import VoyanteImg from "../../media/voyante.png";
import SorciereImg from "../../media/sorciere.png";
import ChasseurImg from "../../media/chasseur.png";
import CupidonImg from "../../media/cupidon.png";
import FilleImg from "../../media/fille.png";

const cardsData = {
  villageois: {
    title: "Villageois",
    img: VillageoisImg,
    description:
      "Son objectif est d'éliminer tous les Loups-Garous. Il ne dispose d'aucun pouvoir particulier : uniquement sa perspicacité et sa force de persuasion.",
  },
  garou: {
    title: "Loup-Garou",
    img: GarouImg,
    description:
      "Son objectif est d'éliminer tous les innocents (ceux qui ne sont pas Loups-Garous). Chaque nuit, il se réunit avec ses compères Loups pour décider d'une victime à éliminer...",
  },
  voyante: {
    title: "Voyante",
    img: VoyanteImg,
    description:
      "Son objectif est d'éliminer tous les Loups-Garous. Chaque nuit, elle peut espionner un joueur et découvrir sa véritable identité...",
  },
  sorciere: {
    title: "Sorcière",
    img: SorciereImg,
    description:
      "Son objectif est d'éliminer tous les Loups-Garous. Elle dispose de deux potions : une potion de vie pour sauver la victime des Loups, et une potion de mort pour assassiner quelqu'un.",
  },
  chasseur: {
    title: "Chasseur",
    img: ChasseurImg,
    description:
      "Son objectif est d'éliminer tous les Loups-Garous. A sa mort, il doit éliminer un joueur en utilisant sa dernière balle...",
  },
  cupidon: {
    title: "Cupidon",
    img: CupidonImg,
    description:
      "Son objectif est d'éliminer tous les Loups-Garous. Dès le début de la partie, il doit former un couple de deux joueurs. Leur objectif sera de survivre ensemble, car si l'un d'eux meurt, l'autre se suicidera.",
  },
  fille: {
    title: "Petite fille",
    img: FilleImg,
    description:
      "Son objectif est d'éliminer tous les Loups-Garous. Chaque nuit, elle peut espionner les Loups-Garous.",
  },
};

export default cardsData;
