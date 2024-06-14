
import { MouseEvent} 				from "react";
import {useDispatch }				from 'react-redux';

import {
	getSingleTitle,useSelector,useFetch,FetchData,
	useTheme,styled,RootState,IMAGE,TEXT,HEADER,STAR,BUTTON
} 									from "./header"

import {API_DATA_3,cardActionType}  from '../../utility/types/typeApp';

const CleintContainer = styled.div`${({theme}) => `
    box-shadow: 0px 0px 0px 8px ${theme.colors.gray3};
`}`;
const textStyle =(color?:string)=>{
	return {
		fontWeight:500,
		...(color!==undefined && {color})
	}
}
const Copmonent_1=(imgPath:string,txt1:string,txt2:string)=>{
	return <div className="col-span-5 grid grid-flow-row gap-y-[8px] ">
	<div className="flex gap-x-[6px] items-center">
		<IMAGE width={24} height={24} path={`/image/about/client/${imgPath}`} activeBorder={false} parentClass="w-fit" />
		<TEXT text={txt1} {...textStyle()} responsive="set12" />
	</div>
	<TEXT text={txt2} {...textStyle()} responsive="set5" />
</div>
}
const visitWebsiteButton:cardActionType=(event,url:string)=>{
	// dispatch(addEditTitle({id:"about_client",content:{title:"Hello Redux",content:"Hello WWWW"}}))
	// dispatch(removeTitle("existingKey"))
}
const Client=() => {

	const theme = useTheme();
	const dispatch = useDispatch();

	const {key,title,content} = useSelector((state: RootState) => getSingleTitle(state, "about_client"));
  	const { data,success}: FetchData<API_DATA_3> = useFetch <API_DATA_3>('about/client',[]);

	const HEADER_WITH_STAR = STAR(HEADER);

	return (
		<div className="flex flex-col cp-gap-y-2"> 
			<HEADER_WITH_STAR title={title} content={content} />
			<div className="grid grid-cols-1 md:grid-cols-2 cp-pd-1 gap-x-[30px] lg:gap-x-[40px] xl:gap-x-[50px] gap-y-[30px]" >
				{data.map(({section1,section2,section3},index) => 
				<CleintContainer key={index} className="cp-color-2 rounded-[12px] flex flex-col cp-gap-y-5 cp-pd-1" >
					<div className="flex flex-col md:grid md:grid-flow-col md:grid-rows-2 ">
						<TEXT text={"Since "+ section1.year} {...textStyle(theme.colors.gray1)} responsive="set2" className="text-left pb-[14px]" />
						<TEXT text={section1.name} responsive="set11" />
						<BUTTON 
							text="Visit Website" localAction={visitWebsiteButton} type="directButton" 
							className='mt-[20px] md:mt-0 md:row-span-2 md:place-self-center cp-color-2 rounded-[10px] px-[24px] py-[18px]'
						/>
					</div>      
					<div className="flex justify-around cp-gap-x-1">
						{Copmonent_1("Icon_1.svg","Domain",section2.title1)}
						<div className="h-full w-[1px]" style={{background:theme.colors.gray2}}>
						</div>
						{Copmonent_1("Icon_2.svg","Category",section2.title2)}
					</div>
					<div className="flex flex-col gap-y-[14px] cp-pd-2 rounded-[12px] border-[1px] border-gray-1">               
						<TEXT text="What They Said 🤗" {...textStyle(theme.colors.gray1)} responsive="set2" />
						<TEXT text={section3.detail}   {...textStyle()} responsive="set2" />
					</div>
				</CleintContainer>)}
			</div>
		</div>
	);
};

export default Client;