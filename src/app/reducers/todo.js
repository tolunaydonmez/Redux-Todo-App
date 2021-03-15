import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    list: [
      {
        id: 1,
        title: "İş",
        done: true,
      },
      {
        id: 2,
        title: "Spor",
        done: true,
      },
      {
        id: 3,
        title: "Uyku",
        done: false,
      },
    ],
    search: "",
    filter: "all",
  },
  reducers: {
    addTodo: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      state.list = state.list.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.title }
          : todo
      );
    },
    toggleTodo: (state, action) => {
      state.list = state.list.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    },
    searchTodo: (state, action) => {
      state.search = action.payload;
    },
    filterTodo: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  editTodo,
  toggleTodo,
  searchTodo,
  filterTodo,
} = todoSlice.actions;

export const selectList = (state) => state.todo.list;
export const selectSearch = (state) => state.todo.search;
export const selectFilter = (state) => state.todo.filter;

export default todoSlice.reducer;
