import { MouseEvent} 			from "react";
import styled,{ useTheme } 		from "styled-components";

import IMG 						from "../ui/IMAGE";
import TEXT_1 					from "../ui/TEXT"
import {API_DATA_1}  			from '../../utility/typeApp';
import useFetch, {FetchData}  	from '../../utility/customHook/API';


const Container = styled.div``;

const Team= () => {
  	const theme = useTheme();

	const { data,success}: FetchData<API_DATA_1> = useFetch <API_DATA_1>('realestate/about/team',{title:{},sections:[]});

	const teamTwitterButton=(event:MouseEvent<HTMLButtonElement>)=>{
		console.log("Twitter",event)
	}
	const teamTelegramButton=(event:MouseEvent<HTMLButtonElement>)=>{
		console.log("Telegram",event)
	}
	return (
		<Container className="grid grid-flow-row gap-y-[60px]">
			<div className="grid content-center">
				<TEXT_1 text={data.title?.title} fontSize={"38px"} className="" />
				<TEXT_1 text={data.title?.content} fontSize={"16px"} color={theme.colors.gray1} fontWeight={500} className="" />
			</div>
			<div className="grid grid-flow-row grid-cols-4 gap-x-2" >
				{data.sections.map(({title,subtitle,icon},index) => {
				return (
					<div key={index} className="elementContainer  border-[1px] border-gray-1 rounded-[12px] p-[30px] grid grid-flow-row" >
						<div className="relative">
							<img  src={icon} width={0} height={0} sizes="100%" className="h-auto w-full" /> 
							<button 
								className="bg-purple-1 rounded-[43px] absolute -bottom-[24px] left-[50%] -translate-x-[50%] z-10 buttonStyle px-[20px] py-[12px]"
								onClick={teamTwitterButton}
							>
								<IMG width={24} height={24} path="/image/about/team/Icon_2.svg" activeBorder={false} />
							</button>
						</div>      
						<div className="mt-[50px]">
						<TEXT_1 text={title} fontSize={"24px"} lineHeight={"28px"} className="text-center" />
						<TEXT_1 text={subtitle} fontSize={"18px"} color={theme.colors.gray1} lineHeight={"24px"} fontWeight={500} className="text-center" />
						</div>
						<div className="chatContent p-[14px] pl-[24px] border-[1px] rounded-[100px] border-gray-1 bg-gray-1 mt-[20px] flex justify-between items-center">
						<p>Say Hello 👋</p>
						<button 
							className="buttonStyle p-[8px] bg-purple-1 rounded-[43px]"
							onClick={teamTelegramButton}
							>
							<IMG width={20} height={20} path="/image/about/team/Icon_1.svg" activeBorder={false} />
							</button>
						</div>
					</div>
				);
				})}
			</div>
		</Container>
	);
};

export default Team;