import Achievement 	from "./achievement";
import Experience 	from "./experience";
import Value 		from "./value";
import Journey 		from "./journey";
import Team 		from "./team";
import Client 		from "./client";

export default () => {
	return <div className="com-grid-1">
		<Journey />
		<Value />
		<Achievement />
		<Experience />
		<Team />
		<Client />
	</div>
}