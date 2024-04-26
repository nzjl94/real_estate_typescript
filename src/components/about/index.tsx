import styled from "styled-components";

import Achievement from "./achievement";
import Experience from "./experience";
import Value from "./value";
import Journey from "./journey";
import Team from "./team";
import Client from "./client";
import Start from "../ui/components/TEXT_BUTTON";
import Theme from "../ui/components/theme";

const Content=styled.div``;
export default () => {

	return (<Theme>
		<Content className="grid gap-y-[150px] px-[160px] pb-[150px] ">
			<Journey />
			<Value />
			<Achievement />
			<Experience />
			<Team />
			<Client />
		</Content>
		<Start />
	</Theme>)
}