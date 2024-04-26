import Theme 	from "../ui/components/theme";
import styled 	from "styled-components";

import Start 	from "../ui/components/TEXT_BUTTON";
import Property from "./property"
import Client 	from "./client"
import Question from "./question"
import Journey 	from "./journey"


const Home = () =>{
	const Content=styled.div``;

	return (<Theme>
		<Content className="grid pb-[96px] ">
			<Journey />
			<Property />
			<Client />
			<Question />
		</Content>
		<Start />
	</Theme>)
}




export default Home;