import { MouseEvent} 								from "react";
import styled,{ useTheme } 							from "styled-components";
import { useSelector,useDispatch }					from 'react-redux';

import HEADER 										from "../ui/components/HEADER";
import TEXT 										from "../ui/elements/TEXT"
import IMG 											from "../ui/elements/IMAGE";
import {indTitle} 									from '../../utility/typeStore';
import {API_DATA_3}  								from '../../utility/typeApp';
import useFetch, {FetchData}  						from '../../utility/customHook/useGetAPI';
import { selectTitleData} 							from '../../store/slice/title';


const Container = styled.div``;
const Content = styled.div`${({theme}) => `
  .sectionContainer {
    box-shadow: 0px 0px 0px 8px ${theme.colors.gray3};
  }
`}`;

export default () => {

	const dispatch = useDispatch();

	const title_section:indTitle = useSelector(selectTitleData);
	const {title,content}=title_section.about_client

  	const theme = useTheme();
	
  	const { data,success}: FetchData<API_DATA_3> = useFetch <API_DATA_3>('realestate/about/client',{title:{},sections:[]});

	const visitWebsiteButton=(event:MouseEvent<HTMLButtonElement>,url:string)=>{
		//dispatch(addEditTitle({
		//	id:"about_client",
		//	content:{title:"Hello Redux",content:"Hello WWWW"}
		//}))
		// dispatch(removeTitle("existingKey"))
	}

	const textStyle =(color?:string)=>{
		return {
			fontSize:"18px",
			fontWeight:500,
			...(color!==undefined && {color})
		}
	}
	return (
		<Container className="grid grid-flow-row gap-y-[60px]"> 
		<HEADER title={title} content={content} />
		<Content className="grid grid-flow-col gap-x-[50px]" >
			{data.sections.map(({section1,section2,section3},index) => {
				return (
					<div key={index} className="sectionContainer bg-gray-2 p-[50px] rounded-[12px] border-[1px] border-gray-1 grid grid-flow-row gap-y-[40px]" >
						<div className="firstContainer grid grid-rows-2 grid-flow-col">
							<TEXT text={"Since "+ section1.year} {...textStyle(theme.colors.gray1)} className="text-left pb-[14px]" />
							<TEXT text={section1.name} fontSize={"30px"} />
							<div className="row-span-2 flex items-center justify-end">
								<button 
									className="buttonStyle bg-gray-1 border-[1px] border-gray-1 rounded-[10px] px-[24px] py-[18px]" 
									onClick={(e)=>visitWebsiteButton(e,section1.url)}
								> Visit Website</button>
							</div>
						</div>      
						<div className="secondContainer grid grid-flow-row grid-cols-11 gap-x-[30px]">
							<div className="col-span-5 grid grid-flow-row gap-y-[8px] ">
								<div className="flex flex-row gap-x-[6px]">
									<IMG width={24} height={24} path="/image/about/client/Icon_1.svg" activeBorder={false} />
									<TEXT text="Domain" {...textStyle()} />
								</div>
								<TEXT text={section2.title1} {...textStyle()}/>
							</div>
							<div className="col-span-1 flex items-center justify-center">
								<div style={{width:"1px",height:"100%",background:theme.colors.gray2}}></div>
							</div>
							<div className="col-span-5 grid grid-flow-row gap-y-[8px]">
								<div className="flex flex-row gap-x-[6px]">
									<IMG width={24} height={24} path="/image/about/client/Icon_2.svg" activeBorder={false} />
									<TEXT text="Category" {...textStyle()} />
								</div>
								<TEXT text={section2.title2} {...textStyle()} />
							</div>
						</div>
						<div className="grid grid-flow-row gap-y-[14px] p-[30px] rounded-[12px] border-[1px] border-gray-1">               
							<TEXT text="What They Said 🤗" {...textStyle(theme.colors.gray1)}/>
							<TEXT text={section3.detail}   {...textStyle()} />
						</div>
					</div>
				);
			})}
		</Content>
		</Container>
	);
};