import { useContext } from "react";

import { Link } from "react-router-dom";

import logo from "./logo.png";

import GarouContext from "../../contexts/GarouContext";

import styles from "./Header.module.css";

export default function Header() {
  const { setRoster, setNames } = useContext(GarouContext);

  const resetGame = () => {
    setRoster([])
    setNames([])
  }

  return (
    <div className={styles.header}>
      <Link to="/">
        <img onClick={() => resetGame()} src={logo} className={styles.logo} alt="logo" />
      </Link>
      <h1 className={styles.title}>Loup Garou</h1>
    </div>
  );
}
