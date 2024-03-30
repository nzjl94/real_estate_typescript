import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {todoInitialState} from "./initialStore"



const todoSlice = createSlice({
  name: 'todos',
  initialState:todoInitialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: state.todos.length + 1,
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});
export const { addTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;