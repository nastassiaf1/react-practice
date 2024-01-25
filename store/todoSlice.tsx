import { createSlice } from "@reduxjs/toolkit";
import ToDo from "../src/interfaces/todo";

const todoSlice = createSlice({
  name: "todoList",
  initialState: [],
  reducers: {
    addTodo: (state: ToDo[], action) => {
      const newTodo: ToDo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.push(newTodo);
    },
    toggleComplete: (state: ToDo[], action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state: ToDo[], action) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});
export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;