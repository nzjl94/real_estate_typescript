import React from 'react';
import styled,{ useTheme } from "styled-components";

import Connect from "./connect";
import Explore from "./explore";
import Start from "./start";
import Theme from "../general/theme";
import HEADER from "../ui/HEADER"

const Content=styled.div``;

export default () => (
	<Theme>
		<Content className="grid flex-col gap-20">
			<HEADER 
				title="Get in Touch with Estatein" content="Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation." 
			/>
			<Connect /> 
			<Explore />
			<Start />
		</Content>
	</Theme>
);