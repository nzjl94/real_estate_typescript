
import { MouseEvent} 				from "react";
import {useDispatch }				from 'react-redux';

import {
	getSingleTitle,useSelector,useFetch,FetchData,
	useTheme,styled,RootState,IMAGE,TEXT,HEADER,STAR
} 									from "./header"

import {API_DATA_3}  				from '../../utility/types/typeApp';

const CleintContainer = styled.div`${({theme}) => `
    box-shadow: 0px 0px 0px 8px ${theme.colors.gray3};
`}`;
const textStyle =(color?:string)=>{
	return {
		fontSize:"18px",
		fontWeight:500,
		...(color!==undefined && {color})
	}
}
const Copmonent_1=(imgPath:string,txt1:string,txt2:string)=>{
	return <div className="col-span-5 grid grid-flow-row gap-y-[8px] ">
	<div className="flex flex-row gap-x-[6px]">
		<IMAGE width={24} height={24} path={`/image/about/client/${imgPath}`} activeBorder={false} />
		<TEXT text={txt1} {...textStyle()} />
	</div>
	<TEXT text={txt2} {...textStyle()}/>
</div>
}
const Client=() => {

	const theme = useTheme();
	const dispatch = useDispatch();

	const {key,title,content} = useSelector((state: RootState) => getSingleTitle(state, "about_client"));
	
  	const { data,success}: FetchData<API_DATA_3> = useFetch <API_DATA_3>('about/client',[]);

	const visitWebsiteButton=(event:MouseEvent<HTMLButtonElement>,url:string)=>{
		// dispatch(addEditTitle({
			// id:"about_client",
			// content:{title:"Hello Redux",content:"Hello WWWW"}
		// }))
		// dispatch(removeTitle("existingKey"))
	}
	
	const HEADER_WITH_STAR = STAR(HEADER);

	return (
		<div className="flex flex-col gap-y-[40px] md:gap-y-[50px] lg:gap-y-[60px] xl:gap-y-[80px]"> 
			<HEADER_WITH_STAR title={title} content={content} />
			<div className="grid grid-cols-1 md:grid-cols-2 p-[24px] md:p-[30px] xl:p-[40px] xl:p-[50px] gap-x-[30px] lg:gap-x-[40px] xl:gap-x-[50px]" >
				{data.map(({section1,section2,section3},index) => <CleintContainer key={index} className="bg-gray-2 p-[50px] rounded-[12px] border-[1px] border-gray-1 grid grid-flow-row gap-y-[40px]" >
					<div className="firstContainer grid grid-rows-2 grid-flow-col">
						<TEXT text={"Since "+ section1.year} {...textStyle(theme.colors.gray1)} className="text-left pb-[14px]" />
						<TEXT text={section1.name} fontSize={"30px"} />
						<div className="row-span-2 flex items-center justify-end">
							<button 
								className="bg-gray-1 border-[1px] border-gray-1 rounded-[10px] px-[24px] py-[18px]" 
								onClick={(e)=>visitWebsiteButton(e,section1.url)}
							> Visit Website</button>
						</div>
					</div>      
					<div className="secondContainer grid grid-flow-row grid-cols-11 gap-x-[30px]">
						{Copmonent_1("Icon_1.svg","Domain",section2.title1)}
						<div className="col-span-1 flex items-center justify-center">
							<div style={{width:"1px",height:"100%",background:theme.colors.gray2}}></div>
						</div>
						{Copmonent_1("Icon_2.svg","Category",section2.title2)}
					</div>
					<div className="grid grid-flow-row gap-y-[14px] p-[30px] rounded-[12px] border-[1px] border-gray-1">               
						<TEXT text="What They Said 🤗" {...textStyle(theme.colors.gray1)}/>
						<TEXT text={section3.detail}   {...textStyle()} />
					</div>
				</CleintContainer>)}
			</div>
		</div>
	);
};

export default Client;