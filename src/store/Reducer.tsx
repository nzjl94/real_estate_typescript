import { combineReducers,ThunkAction,Action} from '@reduxjs/toolkit';



import counterReducer from './counterSlice';
import todoReducer    from './todoSlice';
import bookReducer    from './bookSlice';
import cartReducer    from './cartSlice';
import titleReducer   from './titleSlice';
import loginSlice     from './loginSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
  books: bookReducer,
  cart: cartReducer,
  title:titleReducer,
  auth:loginSlice
});



export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default rootReducer;

