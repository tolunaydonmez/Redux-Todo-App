import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, editTodo } from "../../app/reducers/todo";
import styles from "./TodoItem.module.scss";

const TodoItem = ({ id, title = "", done = false }) => {
  const [newTitle, setNewTitle] = useState("");
  const [editActive, setEditActive] = useState(false);
  const dispatch = useDispatch();

  const newEditTodo = () => {
    dispatch(editTodo({ id, title: newTitle }));
    setEditActive(false);
  };

  return (
    <div className={styles.item}>
      <div className={`${styles.title} ${done ? styles.done : ""}`}>
        {editActive ? (
          <div className={styles.edit}>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && title && newEditTodo()}
            />
            <button onClick={newEditTodo}>Done</button>
          </div>
        ) : (
          <span onClick={() => dispatch(toggleTodo(id))}>{title}</span>
        )}
      </div>
      <div className={styles.actions}>
        <button
          className={styles.edit}
          onClick={() => {
            setEditActive(true);
            setNewTitle(title);
          }}
        >
          Edit
        </button>

        <button
          className={styles.delete}
          onClick={() => dispatch(deleteTodo(id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
