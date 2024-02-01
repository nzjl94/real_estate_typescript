// import React, { useState, useEffect} from "react";
// import styled,{ useTheme } from "styled-components";

// import {getAPIData} from '../../utility/API';
// import TEXT_1 from "../../ui/TEXT_ELEMENT"
// import Image from 'next/image'
// import IMG from "../general/icons";

// const Container = styled.div``;

// export default () => {
//   const theme = useTheme();
//   const [data, setData] = useState({title:{},sections:{}})

//   const teamTwitterButton=(event)=>{
//     console.log("Twitter",event)
//   }
//   const teamTelegramButton=(event)=>{
//     console.log("Telegram",event)
//   }
//   useEffect( () => {
//     getAPIData('/api/about/team',setData)
//   }, [])
//   return (
//     <Container className="grid grid-flow-row gap-y-[60px]">
//           <div className="grid content-center">
//             <TEXT_1 text={data.title?.title} fontSize={"38px"} className="" />
//             <TEXT_1 text={data.title?.content} fontSize={"16px"} color={theme.colors.gray1} fontWeight={500} className="" />
//           </div>
//           <div className="grid grid-flow-row grid-cols-4 gap-x-2" >
//             {Object.keys(data.sections).length>0 && data.sections.map(({title,subtitle,icon},index) => {
//               return (
//                 <div key={index} className="elementContainer  border-[1px] border-gray-1 rounded-[12px] p-[30px] grid grid-flow-row" >
//                     <div className="relative">
//                         <Image  src={icon} width={0} height={0} sizes="100%" className="h-auto w-full" /> 
//                         <button 
//                           className="bg-purple-1 rounded-[43px] absolute -bottom-[24px] left-[50%] -translate-x-[50%] z-10 buttonStyle px-[20px] py-[12px]"
//                           onClick={teamTwitterButton}
//                         >
//                           <IMG width={24} height={24} path="/image/about/team/Icon_2.svg" activeBorder={false} />
//                         </button>
//                     </div>      
//                     <div className="mt-[50px]">
//                       <TEXT_1 text={title} fontSize={"24px"} lineHeight={"28px"} className="text-center" />
//                       <TEXT_1 text={subtitle} fontSize={"18px"} color={theme.colors.gray1} lineHeight={"24px"} fontWeight={500} className="text-center" />
//                     </div>
//                     <div className="chatContent p-[14px] pl-[24px] border-[1px] rounded-[100px] border-gray-1 bg-gray-1 mt-[20px] flex justify-between items-center">
//                       <p>
//                         Say Hello 👋
//                       </p>
//                       <button 
//                           className="buttonStyle p-[8px] bg-purple-1 rounded-[43px]"
//                           onClick={teamTelegramButton}
//                         >
//                           <IMG width={20} height={20} path="/image/about/team/Icon_1.svg" activeBorder={false} />
//                         </button>
//                     </div>
//                 </div>
//               );
//             })}
//           </div>
//     </Container>
//   );
// };
import React from 'react';

export default () => (
	<div>
		<h1>Team</h1>
	</div>
);