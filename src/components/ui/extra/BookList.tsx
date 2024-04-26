// src/components/BookList.tsx

import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { RootState }                from '../../../store/Reducer';
import { addItem }                  from '../../../store/slice/cart';

const BookList: React.FC = () => {
  const books = useSelector((state: RootState) => state.books.books);
  const dispatch = useDispatch();

  const handleAddToCart = (id: number) => {
    dispatch(addItem(books.find((book) => book.id === id)!));
  };

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <span>{book.title}</span>
            <span>${book.price}</span>
            <button onClick={() => handleAddToCart(book.id)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
