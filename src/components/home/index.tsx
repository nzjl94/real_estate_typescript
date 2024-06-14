import styled 	from "styled-components";
import Property from "./property"
import Client 	from "./client"
import Question from "./question"
import Journey 	from "./journey"

const Home = () =>{
	const Content=styled.div``;
	return <>
		<Journey />
		<Content className="com-grid-1">
			<Property />
			<Client />
			<Question />
		</Content>
	</>
}




export default Home;