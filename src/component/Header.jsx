import styles from './header.module.css';
export default function Header() {
  return (
    <div>
      <h1 className={styles.header}>This is my Todolist</h1>
    </div>
  );
}
