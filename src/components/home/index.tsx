import React from 'react';
import { Link } from 'react-router-dom';

import Table from "./table"
import BookList from "./bookList"

const Home: React.FC = () => (
	<div>
		{/* <h1>Home Page</h1> */}
		<Table />
		{/* <TodoList /> */}
		{/* <BookList /> */}
	</div>
);

export default Home;