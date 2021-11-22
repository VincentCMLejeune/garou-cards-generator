import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <a
        className={styles.link}
        href="https://github.com/VincentCMLejeune/garou-cards-generator"
        target="_blank"
        rel="noreferrer"
      >
        Retrouvez ce projet sur GitHub
      </a>
    </div>
  );
}
