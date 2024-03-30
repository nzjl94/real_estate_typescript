import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Reducer';

const store = configureStore({
  reducer: rootReducer,
  // Add middleware if needed
});

export type AppDispatch = typeof store.dispatch

export default store;