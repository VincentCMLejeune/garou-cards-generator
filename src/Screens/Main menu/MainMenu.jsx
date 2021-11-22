import { Link } from "react-router-dom";

import styles from "./MainMenu.module.css";

export default function MainMenu() {
  return (
    <div className={styles.container}>
      <h2>Tutut fils de pute</h2>
      <Link to="/selection">
        <div>Clique pour commencer</div>
      </Link>
    </div>
  );
}
