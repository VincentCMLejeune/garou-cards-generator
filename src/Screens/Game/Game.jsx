import { useContext, useEffect, useState } from "react";

import generateRoster from "../../algorithm/GenerateRoster";

import GarouContext from "../../contexts/GarouContext";

import Carte from "../../components/Card/Carte";

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

  return (
    <div className={styles.container}>
      <button className={styles.dayButton} onClick={() => setDay(!day)}>
        {day ? "Tomber la nuit" : "Se lever le jour"}
      </button>
      <div className={styles.dayCycle}>
        {day && (
          <div className={styles.day}>
            <div className={styles.sun}></div>
            <div className={styles.moon}></div>
          </div>
        )}
        {!day && (
          <div className={styles.night}>
            <div className={styles.sun}></div>
            <div className={styles.moon}></div>
          </div>
        )}
      </div>
      <div className={styles.cardsContainer}>
        {roster && roster.map((x, i) => <Carte type={x} key={i} />)}
      </div>
    </div>
  );
}
