import React from "react";
import { useSelector } from "react-redux";
import {
  selectList,
  selectSearch,
  selectFilter,
} from "../../app/reducers/todo";
import styles from "./TodoList.module.scss";

import TodoItem from "../TodoItem";

const TodoList = () => {
  const list = useSelector(selectList);
  const search = useSelector(selectSearch);
  const filter = useSelector(selectFilter);

  return (
    <div className={styles.list}>
      {list
        .filter((todo) =>
          todo.title.toLowerCase().includes(search.toLowerCase())
        )
        .filter((todo) => {
          return (
            (filter === "done" && todo.done) ||
            (filter === "" && !todo.done) ||
            filter === "all"
          );
        })
        .map((todo) => (
          <TodoItem {...todo} />
        ))}
    </div>
  );
};

export default TodoList;
