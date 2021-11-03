import GarouImg from '../media/garou.png'
import VillageoisImg from '../media/villageois.png'
import VoyanteImg from '../media/voyante.png'
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
  };
  const carte = cardsData[type];

  const [img, setImg] = React.useState(Cachee)
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')

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
