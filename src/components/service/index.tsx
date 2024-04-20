import React from 'react';
import Theme from "../general/theme";

import Experience 				from "./experience"
import Value 					from "./value"
import Management 				from "./management"
import Investment 				from "./investment"
import Start 					from "../general/start";

import useFetch, {FetchData}  	from '../../utility/customHook/API';


const Service: React.FC = () => {

	type DATA_TYPE ={
		experience:any;
		value:any;
		management:any;
	}
	const { data,success}: FetchData<DATA_TYPE> = useFetch <DATA_TYPE>('realestate/service/detail',{});
	return (success ? <Theme>
		<Experience data={data.experience} />
		<Value 		data={data.value} />
		<Management data={data.management} />
		<Investment />
		<Start />
	</Theme>:<></>)
}

export default Service;