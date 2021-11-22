import { useContext } from "react";
import { Link } from "react-router-dom";

import GarouContext from "../../contexts/GarouContext";

import styles from "./CharacterSelect.module.css";

export default function CharacterSelect() {
  const {
    chasseur,
    cupidon,
    fille,
    sorciere,
    voyante,
    setChasseur,
    setCupidon,
    setFille,
    setGarous,
    setSorciere,
    setVillagers,
    setVoyante,
  } = useContext(GarouContext);

  return (
    <div className={styles.container}>
      <div className={styles.background}> </div>
      <div className="options-selector">
        <div className="character-count">
          <label htmlFor="villagers">Villageois</label>
          <input
            className="number-input"
            type="number"
            onChange={(e) => setVillagers(e.target.value)}
          ></input>
        </div>
        <div className="character-count">
          <label htmlFor="garou">Loup-garous</label>
          <input
            className="number-input"
            type="number"
            onChange={(e) => setGarous(e.target.value)}
          ></input>
        </div>
        <div className="character-count">
          <label htmlFor="voyante">Voyante</label>
          <input type="checkbox" onChange={(e) => setVoyante(!voyante)}></input>
        </div>
        <div className="character-count">
          <label htmlFor="sorciere">Sorcière</label>
          <input
            type="checkbox"
            onChange={(e) => setSorciere(!sorciere)}
          ></input>
        </div>
        <div className="character-count">
          <label htmlFor="chasseur">Chasseur</label>
          <input
            type="checkbox"
            onChange={(e) => setChasseur(!chasseur)}
          ></input>
        </div>
        <div className="character-count">
          <label htmlFor="cupidon">Cupidon</label>
          <input type="checkbox" onChange={(e) => setCupidon(!cupidon)}></input>
        </div>
        <div className="character-count">
          <label htmlFor="fille">Petite fille</label>
          <input type="checkbox" onChange={(e) => setFille(!fille)}></input>
        </div>
      </div>
      <Link to="/play">
        <button className="launch-button">LET'S GO !</button>
      </Link>
    </div>
  );
}
