import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTodo, selectFilter } from "../../app/reducers/todo";
import styles from "./Filter.module.scss";

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <div className={styles.filter}>
      <button
        onClick={() => dispatch(filterTodo("all"))}
        className={`${filter === "all" ? styles.active : ""}`}
      >
        All
      </button>

      <button
        onClick={() => dispatch(filterTodo("done"))}
        className={`${filter === "done" ? styles.active : ""}`}
      >
        Completed
      </button>

      <button
        onClick={() => dispatch(filterTodo(""))}
        className={`${filter === "" ? styles.active : ""}`}
      >
        Uncompleted
      </button>
    </div>
  );
};

export default Filter;
