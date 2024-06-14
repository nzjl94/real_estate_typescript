import styled 	from "styled-components";
import Start 	from "../ui/components/TEXT_BUTTON";

import Question from "../home/question"
import View 	from "./view"
import Price 	from "./price"
import Inquiry 	from "./inquiry"


const Content=styled.div``;
const Home = () =>{
	return <Content className="com-grid-1">
		<View />
		<Inquiry />
		<Price />
		<Question />
	</Content>
}
export default Home;