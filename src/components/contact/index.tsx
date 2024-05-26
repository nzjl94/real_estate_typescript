import React from 'react';
import styled,{ useTheme } from "styled-components";

import Connect 		from "./connect";
import Explore 		from "./explore";
import Contact 		from "./contact";
import Start 		from "../ui/components/TEXT_BUTTON";
import Theme 		from "../ui/components/theme";

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