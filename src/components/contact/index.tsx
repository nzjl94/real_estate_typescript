import Connect 		from "./connect";
import Explore 		from "./explore";
import Contact 		from "./contact";
import Start 		from "../ui/components/TEXT_BUTTON";

export default () => (
	<>
		<div className="grid gap-y-[150px] px-[160px] pb-[150px]">
			<Contact />
			<Connect /> 
			<Explore />
		</div>
		<Start />
	</>
);