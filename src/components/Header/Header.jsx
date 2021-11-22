import { Link } from "react-router-dom";

import logo from "./logo.png";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <Link to="/">
        <img src={logo} className={styles.logo} alt="logo" />
      </Link>
      <h1 className={styles.title}>Loup Garou</h1>
    </div>
  );
}
