import Theme 	from "../ui/components/theme";

import Property from "./property"
import Client 	from "./client"
import Question from "./question"
import Journey 	from "./journey"


const Home = () => (<Theme>
	<Journey />
	<Property />
	<Client />
	<Question />
</Theme>)

export default Home;