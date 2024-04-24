import React from 'react';
import { Link } from 'react-router-dom';

import Theme 	from "../general/theme";


import Property from "./property"
import Client from "./client"
import Question from "./question"
// import BookList from "./BookList"


const Home: React.FC = () => {

	return (<Theme>
		{/* <h1>Home Page</h1> */}
		<Property />
		<Client />
		<Question />
		{/* <TodoList /> */}
		{/* <BookList /> */}
	</Theme>)
}

export default Home;