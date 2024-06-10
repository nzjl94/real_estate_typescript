import React from 'react';

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
	return (success ? <>
		<Experience data={icon_cards} />
		<div className="grid gap-y-[80px] md:gap-y-[100px] lg:gap-y-[120px] xl:gap-y-[150px] px-[16px] lg:px-[80px] xl:px-[160px] py-[80px] md:py-[100px] lg:py-[120px] xl:py-[150px]" >
			<Value 		data={s_value} />
			<Management data={management} />
			<Investment data={investment} />
		</div>
		<Start id="service_start" />
        <HashLink />

	</>:<></>)
}

export default Service;