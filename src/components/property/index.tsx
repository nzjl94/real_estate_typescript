import Property from "./property"
import Search 	from "./search"
import Request 	from "./request"

const PropertyPage = () =>{
	return <div className="com-grid-1">
		<Search />
		<Property />
		<Request />
	</div>
}
export default PropertyPage;