import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchTodo, selectSearch } from "../../app/reducers/todo";
import styles from "./Search.module.scss";

const Search = () => {
  const search = useSelector(selectSearch);
  const dispatch = useDispatch();

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => dispatch(searchTodo(e.target.value))}
      />
    </div>
  );
};

export default Search;
