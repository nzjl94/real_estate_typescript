import React from 'react';
import styled,{ useTheme } from "styled-components";

import Connect from "./connect";
import Explore from "./explore";
import Contact from "./contact";
import Start from "./start";
import Theme from "../general/theme";
import HEADER from "../ui/HEADER"

const Content=styled.div``;

export default () => (
	<Theme>
		<Content className="grid flex-col gap-20">
			<Contact />
			<Connect /> 
			<Explore />
			<Start />
		</Content>
	</Theme>
);