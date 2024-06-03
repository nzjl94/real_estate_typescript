import { MouseEvent} 			from "react";
import {
	getSingleTitle,useSelector,useFetch,FetchData,
	useTheme,RootState,IMAGE,TEXT,HEADER,STAR
} 								from "./header"
import {API_DATA_6}  			from '../../utility/types/typeApp';

const teamTwitterButton=(event:MouseEvent<HTMLButtonElement>)=>{
	console.log("Twitter",event)
}
const teamTelegramButton=(event:MouseEvent<HTMLButtonElement>)=>{
	console.log("Telegram",event)
}
const Team= () => {
  	const theme = useTheme();
	const { data,success}: FetchData<API_DATA_6> = useFetch <API_DATA_6>('about/team',[]);
	const {key,title,content} = useSelector((state: RootState) => getSingleTitle(state, "about_team"));

	const HEADER_WITH_STAR = STAR(HEADER);

	return (
		<div className="flex flex-col gap-y-[40px] md:gap-y-[50px] lg:gap-y-[60px] xl:gap-y-[80px]">
			<HEADER_WITH_STAR title={title} content={content} />

			<div className="grid  grid-cols-1 md:grid-cols-4 gap-x-2" >
				{data.map(({title,subtitle,icon},index) => {
				return (
					<div key={index} className="elementContainer  border-[1px] border-gray-1 rounded-[12px] p-[30px] grid grid-flow-row" >
						<div className="relative">
							<img  src={icon} width={0} height={0} sizes="100%" className="h-auto w-full" /> 
							<button 
								className="bg-purple-1 rounded-[43px] absolute -bottom-[24px] left-[50%] -translate-x-[50%] z-10 buttonStyle px-[20px] py-[12px]"
								onClick={teamTwitterButton}
							>
								<IMAGE width={24} height={24} path="/image/about/team/Icon_2.svg" activeBorder={false} />
							</button>
						</div>      
						<div className="mt-[40px] lg:mt-[50px] pl-[16px] md:pl-[20px] xl:pl-[24px]">
							<TEXT text={title}    responsive="set7" className="text-center" />
							<TEXT text={subtitle} responsive="set2" color={theme.colors.gray1} fontWeight={500} className="text-center" />
						</div>
						<div className="chatContent border-[1px] rounded-[100px] border-gray-1 bg-gray-1 mt-[20px] flex justify-between items-center">
							<TEXT text={"Say Hello 👋"} responsive="set2" fontWeight={500}  />
							<button className="buttonStyle p-[8px] bg-purple-1 rounded-[43px]" onClick={teamTelegramButton} >
								<IMAGE width={20} height={20} path="/image/about/team/Icon_1.svg" activeBorder={false} />
							</button>
						</div>
					</div>
				);
				})}
			</div>
		</div>
	);
};

export default Team;