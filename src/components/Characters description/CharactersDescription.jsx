import React, { useEffect, useState } from "react";

import cardsData from "../Card/CardData";

import styles from "./CharactersDescription.module.css";

export default function CharactersDescription() {
  const [description, setDescription] = useState();
  useEffect(() => {
    let arr = [];
    for (let char in cardsData) {
      arr.push([
        cardsData[char].title,
        cardsData[char].description,
        cardsData[char].img,
      ]);
    }
    setDescription(arr);
  }, []);

  return (
    <div className={styles.descriptionsContainer}>
      <div className={styles.rules}>
        <h2 className={styles.title}>Règles du loup garou</h2>
        <p className={styles.rulesDescription}>
          L’action se déroule dans un village frappé par une terrible
          malédiction : certains de ses habitants se transforment la nuit en
          loups-garous et dévorent d’innocents villageois !
        </p>
        <p className={styles.rulesDescription}>
          Le jeu se déroule selon une alternance jour/nuit. Durant la phase de
          nuit, les loups-garous se réveillent pour choisir un villageois à
          dévorer. Au matin, l’ensemble du village se réveille, et tous les
          habitants débattent pour trouver les loups-garous. Chaque phase de
          jour se termine par un vote, à l’issue duquel la personne la plus
          désignée est condamnée.
        </p>
        <p className={styles.rulesDescription}>
          Les villageois tentent de deviner qui est loup pour en débarrasser le
          village. Les loups tentent de se fondre aux villageois et de détourner
          les soupçons pour survivre et avoir le temps de dévorer tout le monde.
        </p>
        <h2 className={styles.title}>Personnages</h2>
        <div className={styles.characterContainer}>
          {description &&
            description.map((x) => (
              <div className={styles.characterCard}>
                <h3 className={styles.characterName}>{x[0]}</h3>
                <img src={x[2]} alt={x[0]} className={styles.characterPic} />
                <p className={styles.characterDescription}>{x[1]}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
