import styles from "./todo.module.css";
export default function Tolist({ item, todos, setTodos }) {
  function deleteButton(item) {
    console.log("Delete button Clicked", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  function itemClick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  const className = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => itemClick(item.name)}>
          {item.name}
        </span>{" "}
        <span>
          <buton
            onClick={() => deleteButton(item)}
            className={styles.deleteBtn}
          >
            x
          </buton>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
