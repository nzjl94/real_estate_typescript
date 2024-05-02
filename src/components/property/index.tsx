import Theme 	from "../ui/components/theme";
import styled 	from "styled-components";

import Start 	from "../ui/components/TEXT_BUTTON";
import Property from "./property"
import Search 	from "./search"
import Request 	from "./request"


const Home = () =>{
	const Content=styled.div``;

	return (<Theme>
		<Content className="grid pb-[96px] ">
			<Search />
			<Property />
			<Request />
		</Content>
		<Start show={true} />
	</Theme>)
}




export default Home;