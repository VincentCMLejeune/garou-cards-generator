import Cachee from "../../media/cachee.png";

import cardsData from "./CardData";

import React, { useState } from "react";

import "./Carte.css";

export default function Carte({ type, name }) {
  const carte = cardsData[type];

  const [img, setImg] = useState(Cachee);
  const [title, setTitle] = useState("");

  const toggle = (e) => {
    if (img === carte.img) {
      setImg(Cachee);
      setTitle("");
    } else {
      setImg(carte.img);
      setTitle(carte.title);
    }
  };

  return (
    <div className="carte">
      <p className="player-name">{name}</p>
      <img src={img} alt={title} className="carte-img" onClick={toggle} />
      <h2 className="title">{title}</h2>
    </div>
  );
}
