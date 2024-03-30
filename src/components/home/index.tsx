import React from 'react';
import { Link } from 'react-router-dom';

import Test from "./Test"
import TodoList from "./TodoList"
import BookList from "./BookList"

const Home: React.FC = () => (
	<div>
		<h1>Home Page</h1>
		<Test />
		<TodoList />
		<BookList />
	</div>
);

export default Home;