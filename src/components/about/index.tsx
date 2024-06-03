import Achievement 	from "./achievement";
import Experience 	from "./experience";
import Value 		from "./value";
import Journey 		from "./journey";
import Team 		from "./team";
import Client 		from "./client";
import Start 		from "../ui/components/TEXT_BUTTON";

export default () => {
	return <>
		<div className="grid gap-y-[80px] md:gap-y-[100px] lg:gap-y-[120px] xl:gap-y-[150px] px-[16px] lg:px-[80px] xl:px-[160px] pb-[80px] md:pb-[100px] lg:pb-[120px] xl:pb-[150px] ">
			<Journey />
			<Value />
			<Achievement />
			 <Experience />
			<Team />
			<Client />
		</div>
		<Start />
	</>
}