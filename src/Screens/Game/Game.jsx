import { useContext, useEffect } from "react";

import GarouContext from "../../contexts/GarouContext";

import Carte from "../../components/Carte";

import styles from "./Game.module.css";

export default function Game() {
  const generateRooster = () => {
    let arr = [];
    for (let i = 0; i < Number(villagers); i++) {
      arr.push("villageois");
    }
    for (let i = 0; i < Number(garous); i++) {
      arr.push("garou");
    }
    if (voyante) {
      arr.push("voyante");
    }
    if (sorciere) {
      arr.push("sorciere");
    }
    if (chasseur) {
      arr.push("chasseur");
    }
    if (cupidon) {
      arr.push("cupidon");
    }
    if (fille) {
      arr.push("fille");
    }

    let currentIndex = arr.length;
    while (currentIndex !== 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex],
        arr[currentIndex],
      ];
    }

    return arr;
  };

  const {
    roster,
    setRoster,
    villagers,
    garous,
    voyante,
    chasseur,
    sorciere,
    cupidon,
    fille,
  } = useContext(GarouContext);

  useEffect(() => {
    setRoster(generateRooster());
  });

  return (
    <div className={styles.container}>
      <h2>Le village</h2>
      <div>It's the game</div>
      <div className={styles.cardsContainer}>
        {roster && roster.map((x, i) => <Carte type={x} key={i} />)}
      </div>
    </div>
  );
}
