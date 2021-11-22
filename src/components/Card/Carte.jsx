import Cachee from "../../media/cachee.png";

import cardsData from "./CardData";

import React, { useState } from "react";

import "./Carte.css";

export default function Carte({ type }) {
  const carte = cardsData[type];

  const [img, setImg] = useState(Cachee);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const toggle = (e) => {
    if (img === carte.img) {
      setImg(Cachee);
      setTitle("");
      setDescription("");
    } else {
      setImg(carte.img);
      setTitle(carte.title);
      setDescription(carte.description);
    }
  };

  return (
    <div className="carte">
      <input className="player-name" type="text"></input>
      <img src={img} alt={title} className="carte-img" onClick={toggle} />
      <h2 className="title">{title}</h2>
      {/* <p className="description">{description}</p> */}
    </div>
  );
}
