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
		investment:any;
	}
	const { data:{experience,value:s_value,management,investment},success}: FetchData<DATA_TYPE> = useFetch <DATA_TYPE>('realestate/service/detail',{});
	return (success ? <Theme>
		<Experience data={experience} />
		<Value 		data={s_value} />
		<Management data={management} />
		<Investment data={investment} />
		<Start />
	</Theme>:<></>)
}

export default Service;