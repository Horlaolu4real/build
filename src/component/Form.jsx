import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });

  function submitFile(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form className={styles.todoform} onSubmit={submitFile}>
      <div className={styles.container}>
        <input
          className={styles.modern}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
          type=""
          placeholder="Enter todo item"
        />
        <button className={styles.btn} type="submit">
          ADD
        </button>
      </div>
    </form>
  );
}
