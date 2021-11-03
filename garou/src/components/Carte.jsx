import GarouImg from '../media/garou.png'
import VillageoisImg from '../media/villageois.png'
import VoyanteImg from '../media/voyante.png'
import SorciereImg from '../media/sorciere.png'
import ChasseurImg from '../media/chasseur.png'
import CupidonImg from '../media/cupidon.png'
import FilleImg from '../media/fille.png'
import Cachee from '../media/cachee.png'

import React, {useState} from 'react'

import './Carte.css'

export default function Carte({ type }) {
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

  const carte = cardsData[type];

  const [img, setImg] = useState(Cachee)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const toggle = (e) => {
      if (img === carte.img) {
          setImg(Cachee)
          setTitle('')
          setDescription('')
      }
      else {
          setImg(carte.img)
          setTitle(carte.title)
          setDescription(carte.description)
      }
  }


  return (
    <div className="carte">
      <img src={img} alt={title} className="carte-img" onClick={toggle} />
      <input type="text"></input>
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
    </div>
  );
}
