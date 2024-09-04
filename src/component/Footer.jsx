import styles from "./footer.module.css";
export default function Footer({ complete, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed Todo:{complete}</span>
      <span clasName={styles.item}>totalTodos:{totalTodos}</span>
    </div>
  );
}
