import React from "react";
import "./App.scss";
import Search from "./components/Search";
import AddTodo from "./components/AddTodo";
import Filter from "./components/Filter";

import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="todo">
      <div className="todo-list">
        <Filter />
        <Search />
        <TodoList />
        <AddTodo />
      </div>
    </div>
  );
}

export default App;
