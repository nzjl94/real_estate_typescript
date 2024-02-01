// import React, { useState, useEffect} from "react";
// import styled,{ useTheme } from "styled-components";

// import Header1 from "../general/headerComponent";


// import IMG from "../general/icons";
// import TEXT_1 from "../../ui/TEXT_ELEMENT"
// import {getAPIData} from '../../utility/API'


// const Container = styled.div``;
// const Content = styled.div`${({theme}) => `
//   .sectionContainer {
//     box-shadow: 0px 0px 0px 8px ${theme.colors.gray3};
//     .secondContainer {
//       #verticle-line {
//         width: 1px;
//         background: ${theme.colors.gray2};
//       }
//     }
//   }
// `}`;

// export default () => {

//   const theme = useTheme();
//   const [data, setData] = useState({title:{},sections:{}})
  
//   const visitWebsiteButton=(event)=>{
//     console.log("Twitter",event)
//   }
//   useEffect( () => {
//     getAPIData('/api/about/client',setData)
//   }, [])
//   return (
//     <Container className="grid grid-flow-row gap-y-[60px]"> 
//       <Header1 title={data.title?.title} content={data.title?.content} />
//       <Content className="grid grid-flow-col gap-x-[50px]" >
//             {Object.keys(data.sections).length>0 && data.sections.map(({section1,section2,section3},index) => {
//               return (
//                 <div key={index} className="sectionContainer bg-gray-2 p-[50px] rounded-[12px] border-[1px] border-gray-1 grid grid-flow-row gap-y-[40px]" >
//                     <div className="firstContainer grid grid-rows-2 grid-flow-col">

//                       <TEXT_1 text={"Since "+ section1.year} fontSize={"18px"} color={theme.colors.gray1} fontWeight={500} className="pb-[14px]" />
//                       <TEXT_1 text={section1.name} fontSize={"30px"} />

//                       <div className="row-span-2 flex items-center justify-end">
//                         <button className="buttonStyle bg-gray-1 border-[1px] border-gray-1 rounded-[10px] px-[24px] py-[18px]" onClick={visitWebsiteButton(section1.url)}> Visit Website</button>
//                       </div>
//                     </div>      
//                     <div className="secondContainer grid grid-flow-col gap-x-[30px]">
//                       <div className="flex flex-col">
//                         <div className="flex items-center justify-start">
//                           <IMG width={24} height={24} path="/image/about/client/Icon_1.svg" activeBorder={false} parentClass="inline-block"/>
//                           <span className="pl-1">Domain</span>
//                         </div>
//                         <TEXT_1 text={section2.title1} fontSize={"20px"} fontWeight={500} className="mt-[8px]" />
//                       </div>
//                       <div id="verticle-line"></div>

//                       <div className="flex flex-col">
//                         <div className="flex items-center justify-start">
//                           <IMG width={24} height={24} path="/image/about/client/Icon_2.svg" activeBorder={false} parentClass="inline-block"/>
//                           <span className="pl-1">Category</span>
//                         </div>
//                         <h1 className="mt-[8px]">{section2.title2}</h1>
//                       </div>
//                     </div>
//                     <div className="detailContainer p-[30px] rounded-[12px] border-[1px] border-gray-1">               
//                       <TEXT_1 text="What They Said 🤗" fontSize={"18px"} color={theme.colors.gray1} fontWeight={500} className="pb-[14px]" />
//                       <TEXT_1 text={section3.detail}   fontSize={"18px"} fontWeight={500} />
//                     </div>
//                 </div>
//               );
//             })}
//       </Content>
//     </Container>
//   );
// };
import React from 'react';

export default () => (
	<div>
		<h1>Client</h1>
	</div>
);