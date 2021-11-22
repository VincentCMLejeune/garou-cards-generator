import { Link } from "react-router-dom";

import styles from "./MainMenu.module.css";

export default function MainMenu() {
  return (
    <div className={styles.container}>
    <div className={styles.background}> </div>
      <h2>Bienvenue dans le Garou made in React !</h2>
      <Link to="/selection">
        <button className={styles.launchButton}>Commencer</button>
      </Link>
    </div>
  );
}
