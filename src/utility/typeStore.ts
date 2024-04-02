import {TEXT_PARAGRAPH} from "./typeApp"

export interface Book {
    id: number;
    title: string;
    price: number;
    quantity: number;
}
export interface BookState {
    books: Book[];
}
interface CartItem extends Book {
    quantityInCart: number;
}
export interface CartState {
    items: CartItem[];
    discount: number;
}

export interface CounterState {
    value: number;
}

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}
  
export interface TodoState {
    todos: Todo[];
}


export interface indTitle {
    [key: string]:TEXT_PARAGRAPH
}
  
export interface titleState {
    loading: 'idle' | 'pending' | 'fulfilled' | 'rejected';
    error: string | null;
    data:indTitle;
}

export interface singleTitle{
    id:string;
    content:TEXT_PARAGRAPH;
}
