import { useContext, useEffect, useState } from "react";

import generateRoster from "../../algorithm/GenerateRoster";

import GarouContext from "../../contexts/GarouContext";

import Carte from "../../components/Carte";

import styles from "./Game.module.css";

export default function Game() {
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
    setRoster(
      generateRoster(
        villagers,
        garous,
        voyante,
        chasseur,
        sorciere,
        cupidon,
        fille
      )
    );
  }, []);

  const [day, setDay] = useState(true);

  useEffect(() => {
    if (day) {
      console.log("Il fait jour");
    } else {
      console.log("Il fait nuit");
    }
  }, [day]);

  return (
    <div className={styles.container}>
      <button onClick={() => setDay(!day)}>Switch</button>
      <div className={styles.dayCycle}>
        {day && <div className={styles.day}></div>}
        {!day && <div className={styles.night}></div>}

      </div>
      <div className={styles.cardsContainer}>
        {roster && roster.map((x, i) => <Carte type={x} key={i} />)}
      </div>
    </div>
  );
}
