import logo from "./logo.png";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} className={styles.logo} alt="logo" />
      <h1 className={styles.title}>Loup Garou</h1>
    </div>
  );
}
