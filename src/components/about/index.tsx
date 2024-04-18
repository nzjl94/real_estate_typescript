import styled from "styled-components";

import Achievement from "./achievement";
import Experience from "./experience";
import Value from "./value";
import Journey from "./journey";
import Team from "./team";
import Client from "./client";
import Start from "../general/start";
import Theme from "../general/theme";

const Content=styled.div``;
export default () => {

	return (<Theme>
		<Content className="grid flex-col gap-20">
			<Journey />
			<Value />
			<Achievement />
			<Experience />
			<Team />
			<Client />
			<Start />
		</Content>
	</Theme>)
}