import React from 'react';
import styled,{ useTheme } from "styled-components";

import Connect from "./connect";
import Explore from "./explore";
import Contact from "./contact";
import Start from "../general/start";

import Theme from "../general/theme";
import HEADER from "../ui/HEADER"

const Content=styled.div``;

export default () => (
	<Theme>
		<Content className="grid gap-y-[150px] px-[160px] pb-[150px]">
			<Contact />
			<Connect /> 
			<Explore />
		</Content>
		<Start />
	</Theme>
);