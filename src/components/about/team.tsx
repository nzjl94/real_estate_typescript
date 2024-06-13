import { MouseEvent} 			from "react";
import {
	getSingleTitle,useSelector,useFetch,FetchData,
	useTheme,RootState,IMAGE,TEXT,BUTTON,HEADER,STAR
} 									from "./header"
import {API_DATA_6,cardActionType}	from '../../utility/types/typeApp';

const teamTwitterButton:cardActionType=(event,param)=>{
	console.log("Twitter",event)
}
const teamTelegramButton:cardActionType=(event,param)=>{
	console.log("Telegram",event)
}
const Team= () => {
  	const theme = useTheme();
	const { data,success}: FetchData<API_DATA_6> = useFetch <API_DATA_6>('about/team',[]);
	const {key,title,content} = useSelector((state: RootState) => getSingleTitle(state, "about_team"));

	const HEADER_WITH_STAR = STAR(HEADER);

	return (
		<div className="flex flex-col cp-gap-y-2">
			<HEADER_WITH_STAR title={title} content={content} />

			<div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]" >
				{data.map(({title,subtitle,icon},index) => {
				return (
					<div key={index} className="elementContainer  border-[1px] border-gray-1 rounded-[12px] p-[30px] grid grid-flow-row" >
						<div className="relative">
							<img  src={icon} width={0} height={0} sizes="100%" className="h-auto w-full" /> 
							<BUTTON 
								text="/image/about/team/Icon_2.svg" localAction={teamTwitterButton} textClass="set2"
								type="imgButton" className='bg-purple-1 rounded-[43px] absolute -bottom-[24px] left-[50%] -translate-x-[50%] z-10 px-[20px] py-[10px] lg:px-[26px] lg:py-[14px]'
							/>
						</div>      
						<div className="mt-[40px] lg:mt-[50px] pl-[16px] md:pl-[20px] xl:pl-[24px]">
							<TEXT text={title}    responsive="set7" className="text-center" />
							<TEXT text={subtitle} responsive="set2" color={theme.colors.gray1} fontWeight={500} className="text-center" />
						</div>
						<div className="chatContent border-[1px] rounded-[100px] border-gray-1 bg-gray-1 mt-[20px] flex justify-between items-center">
							<TEXT text={"Say Hello 👋"} responsive="set2" fontWeight={500}  />
							<BUTTON 
								text="/image/about/team/Icon_1.svg" localAction={teamTelegramButton} textClass="set4" 
								type="imgButton" className='p-[14px] md:p-[8px] lg:p-[10px] bg-purple-1 rounded-[100%]' 
							/>
							
						</div>
					</div>
				);
				})}
			</div>
		</div>
	);
};

export default Team;