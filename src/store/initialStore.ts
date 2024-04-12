import { AuthState, BookState, TodoState,CounterState,CartState,titleState} from '../utility/typeStore';



export const counterInitialState: CounterState = {
  value: 0,
};
export const todoInitialState: TodoState = {
  todos: [],
};
export const bookInitialState: BookState = {
  books: [
    { id: 1, title: 'Book 1', price: 20, quantity: 10 },
    { id: 2, title: 'Book 2', price: 15, quantity: 15 },
  ],
};
export const cartInitialState: CartState = {
  items: [],
  discount: 0,
};

export const titleInitialState: titleState = {
  loading: 'idle',
  error: null,
  data: {},
};

export const loginInitialState: AuthState = {
  isAuthenticated: false,
  token: null,
  user: null,
  isLoading: false,
  error: null
};