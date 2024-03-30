import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {bookInitialState} from "./initialStore"

const bookSlice = createSlice({
  name: 'books',
  initialState:bookInitialState,
  reducers: {
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const { id, quantity } = action.payload;
      const book = state.books.find((book) => book.id === id);
      if (book) {
        book.quantity = quantity;
      }
    },
  },
});

export const { updateQuantity } = bookSlice.actions;
export default bookSlice.reducer;