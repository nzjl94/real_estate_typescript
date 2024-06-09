import styled 	from "styled-components";
import Start 	from "../ui/components/TEXT_BUTTON";

import Question from "../home/question"
import View 	from "./view"
import Price 	from "./price"
import Inquiry 	from "./inquiry"


const Content=styled.div``;
const Home = () =>{
	return (<>
		<Content className="grid gap-y-[80px] md:gap-y-[100px] lg:gap-y-[120px] xl:gap-y-[150px] px-[16px] lg:px-[80px] xl:px-[160px] pb-[80px] md:pb-[100px] lg:pb-[120px] xl:pb-[150px] pt-[60px] md:pt-[80px] lg:pt-[100px] xl:pt-[120px]">
			<View />
			<Inquiry />
			<Price />
			<Question />
		</Content>
		<Start show={true} />
	</>)
}
export default Home;