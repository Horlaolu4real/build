import Tolist from "./ToIist";
import styles from "./todolist.module.css";
export default function Todolist({ todos, setTodos }) {
  const sorted = 
  todos.slice()
  .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.inputlist}>
      {sorted.map((item) => (
        <Tolist key={item.name} item={item} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
