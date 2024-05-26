import React from 'react';
import Theme from "../ui/components/theme";

import Experience 				from "./experience"
import Value 					from "./value"
import Management 				from "./management"
import Investment 				from "./investment"
import Start 					from "../ui/components/TEXT_BUTTON";

import HashLink 				from '../ui/components/hashLink';
import useFetch, {FetchData}  	from '../../utility/customHook/useGetAPI';
import {TEXT_ICON_TYPE}			from "../../utility/types/typeApp"


const Service: React.FC = () => {

	type DATA_TYPE ={
		experience:any;
		value:any;
		management:any;
		investment:any;
	}

	const { data:{value:s_value,management,investment},success}: FetchData<DATA_TYPE> = useFetch <DATA_TYPE>('service/detail',{});
	const { data:icon_cards,success:_}: FetchData<TEXT_ICON_TYPE[]> = useFetch <TEXT_ICON_TYPE[]>('page/icon-card',[]);


	// 
	return (success ? <Theme>
		<Experience data={icon_cards} />
		<Value 		data={s_value} />
		<Management data={management} />
		<Investment data={investment} />
		<Start id="service_start" />
        <HashLink />

	</Theme>:<></>)
}

export default Service;