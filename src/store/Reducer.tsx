import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import todoReducer from './todoSlice';
import bookReducer from './bookSlice';
import cartReducer from './cartSlice';
import titleReducer from './titleSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
  books: bookReducer,
  cart: cartReducer,
  title:titleReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;