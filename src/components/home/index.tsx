import React from 'react';
import { Link } from 'react-router-dom';

import Theme 	from "../general/theme";


import Property from "./property"
import BookList from "./bookList"


const Home: React.FC = () => {

	return (<Theme>
		{/* <h1>Home Page</h1> */}
		<Property />
		{/* <TodoList /> */}
		{/* <BookList /> */}
	</Theme>)
}

export default Home;