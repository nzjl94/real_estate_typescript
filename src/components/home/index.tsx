import styled 	from "styled-components";

import Start 	from "../ui/components/TEXT_BUTTON";
import Property from "./property"
import Client 	from "./client"
import Question from "./question"
import Journey 	from "./journey"


const Home = () =>{
	const Content=styled.div``;
	return <>
		<Journey />
		<Content className="grid pb-[96px] px-[16px] lg:px-[80px] xl:px-[160px] py-[75px]">
			<Property />
			<Client />
			<Question />
		</Content>
		<Start show={true} />
	</>
}




export default Home;