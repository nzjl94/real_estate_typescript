import Achievement 	from "./achievement";
import Experience 	from "./experience";
import Value 		from "./value";
import Journey 		from "./journey";
import Team 		from "./team";
import Client 		from "./client";
import Start 		from "../ui/components/TEXT_BUTTON";
import Theme 		from "../ui/elements/theme";

export default () => {
	return (<Theme>
		<div className="grid gap-y-[150px] px-[16px] lg:px-[80px] xl:px-[160px] pb-[150px] ">
			<Journey />
			<Value />
			<Achievement />
			<Experience />
			<Team />
			<Client />
		</div>
		<Start />
	</Theme>)
}