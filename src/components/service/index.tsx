import React from 'react';
import Theme from "../general/theme";

import { Link } from 'react-router-dom';

import Experience from "./experience"
import Value from "./value"
import Management from "./management"
import Investment from "./investment"
import Start from "../general/start";


const Service: React.FC = () => (
	<Theme>
		<Experience />
		<Value />
		<Management />
		<Investment />
		<Start />
	</Theme>
);

export default Service;