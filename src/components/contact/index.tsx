import Connect 		from "./connect";
import Explore 		from "./explore";
import Contact 		from "./contact";
import Start 		from "../ui/components/TEXT_BUTTON";

export default () => (
	<>
		<div className="grid gap-y-[80px] md:gap-y-[100px] lg:gap-y-[120px] xl:gap-y-[150px] px-[160px] pb-[80px] md:pb-[100px] lg:pb-[120px] xl:pb-[150px]">
			<Contact />
			<Connect /> 
			<Explore />
		</div>
		<Start />
	</>
);