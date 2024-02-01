import React from 'react';
import styled,{ useTheme } from "styled-components";


import Achievement from "./achievement";
import Experience from "./experience";
import Value from "./value";
import Journey from "./journey";
import Team from "./team";
import Client from "./client";
import Start from "./start";
import Theme from "../general/theme";

const TextContainer = styled.div`${({theme}) => `
    background: ${theme.colors.gray1};
`}`;

const Content=styled.div``;

export default () => (
	<Theme>
		<Content className="grid flex-col gap-20">
			<Journey />
			<Value />
			<Achievement />
			<Experience />
			<Team />
			<Client />
			<Start />
		</Content>
	</Theme>
);