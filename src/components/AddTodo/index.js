import React, { useState } from "react";
import uniqid from "uniqid";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, selectList } from "../../app/reducers/todo";
import styles from "./AddTodo.module.scss";

const AddTodo = () => {
  const list = useSelector(selectList);
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const newTodo = () => {
    if (
      title.trim() &&
      !list.find((todo) => todo.title.toLowerCase() === title.toLowerCase())
    ) {
      dispatch(
        addTodo({
          id: uniqid(),
          title: title.trim(),
          done: false,
        })
      );
    }

    setTitle("");
  };

  return (
    <div className={styles.addArea}>
      <input
        type="text"
        value={title}
        placeholder="Add Todo..."
        onChange={(e) => setTitle(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && newTodo()}
      />
      <button className="add-btn" onClick={newTodo}>
        Add
      </button>
    </div>
  );
};

export default AddTodo;
