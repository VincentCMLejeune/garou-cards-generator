import { useContext, useEffect, useState } from "react";

import generateRoster from "../../algorithm/GenerateRoster";

import GarouContext from "../../contexts/GarouContext";

import Carte from "../../components/Card/Carte";

import styles from "./Game.module.css";

export default function Game() {
  const {
    roster,
    setRoster,
    names,
    setNames,
    villagers,
    garous,
    voyante,
    chasseur,
    sorciere,
    cupidon,
    fille,
  } = useContext(GarouContext);

  const [day, setDay] = useState(true);
  const [description, setDescription] = useState();

  useEffect(() => {
    const [array, text] = generateRoster(
      villagers,
      garous,
      voyante,
      chasseur,
      sorciere,
      cupidon,
      fille
    );
    setRoster(array);
    setDescription(text);
  }, []);

  useEffect(() => {
    if (roster) {
      let arr = [];
      let count = 1;
      while (arr.length < roster.length) {
        let temp = prompt(`Joueur ${count}, quel est ton nom ?`);
        while (arr.includes(temp)) {
          temp = prompt(`Le nom "${temp}" est déjà pris.`);
        }
        arr.push(temp);
        count++;
      }
      setNames(arr.reverse());
    }
  }, [roster]);

  return (
    <div className={styles.container}>
      <button className={styles.dayButton} onClick={() => setDay(!day)}>
        {day ? "Tomber la nuit" : "Lever le jour"}
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
        {roster &&
          roster.map((x, i) => <Carte type={x} key={i} name={names[i]} />)}
      </div>
      <ul className={styles.village}>
        Le village contient :
        {description && description.map((x, i) => <li key={i}>{x}</li>)}
      </ul>
    </div>
  );
}
