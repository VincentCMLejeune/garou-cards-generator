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
