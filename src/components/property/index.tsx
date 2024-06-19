import Property from "./property"
import Search 	from "./search"
import Request 	from "./request"

const PropertyPage = () =>{
	return <>
		<Search />
		<div className="com-grid-1">
			<Property />
			<Request />
		</div>
	</>
}
export default PropertyPage;