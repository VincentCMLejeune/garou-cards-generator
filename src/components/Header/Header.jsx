import { useContext } from "react";
import { Link } from "react-router-dom";

import GarouContext from "../../contexts/GarouContext";

import CharactersDescription from "../Characters description/CharactersDescription";

import logo from "./logo.png";
import styles from "./Header.module.css";

export default function Header() {
  const { setRoster, setNames, showCharacters, setShowCharacters } = useContext(GarouContext);

  const resetGame = () => {
    setRoster([])
    setNames([])
  }

  return (
    <>
    <div className={styles.header}>
      <Link to="/">
        <img onClick={() => resetGame()} src={logo} className={styles.logo} alt="logo" />
      </Link>
      <h1 className={styles.title}>Loup Garou</h1>
      <div onClick={() => setShowCharacters(!showCharacters)} className={styles.characters}>Aide</div>
    </div>
    {showCharacters && <CharactersDescription />}
    </>
  );
}
