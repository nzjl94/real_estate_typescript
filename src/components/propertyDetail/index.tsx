import Theme 	from "../ui/components/theme";
import styled 	from "styled-components";
import Start 	from "../ui/components/TEXT_BUTTON";

import Question from "../home/question"
import View 	from "./view"
import Price 	from "./price"
import Inquiry 	from "./inquiry"


const Content=styled.div``;
const Home = () =>{
	return (<Theme>
		<Content className="grid pb-[96px] ">
			<View />
			<Inquiry />
			<Price />
			<Question />
		</Content>
		<Start show={true} />
	</Theme>)
}
export default Home;