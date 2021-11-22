import { Link } from "react-router-dom";

import styles from "./MainMenu.module.css";

export default function MainMenu() {
  return (
    <div className={styles.container}>
    <div className={styles.background}> </div>
      <Link to="/selection">
        <button className={styles.launchButton}>Commencer</button>
      </Link>
    </div>
  );
}
