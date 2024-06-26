import React from 'react';

import Experience 				from "./experience"
import Value 					from "./value"
import Management 				from "./management"
import Investment 				from "./investment"

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

	return (success ? <>
		<Experience data={icon_cards} />
		<div className="com-grid-1" >
			<Value 		data={s_value} />
			<Management data={management} />
			<Investment data={investment} />
		</div>
        <HashLink />
	</>:<></>)
}

export default Service;