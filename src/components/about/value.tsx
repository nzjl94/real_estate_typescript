// import React, { useState, useEffect} from "react";
// import styled,{ useTheme } from "styled-components";

// import IMG from "../general/icons";
// import TEXT_1 from "../../ui/TEXT_ELEMENT"
// import {getAPIData} from '../../utility/API';

// const Content=styled.div``;
// const Container = styled.div`${({theme}) => `
//   ${Content} {
//     box-shadow: 0px 0px 0px 10px ${theme.colors.gray3};
//   }
// `}`;

// export default () => {
//   const theme = useTheme();
//   const [data, setData] = useState({title:{},sections:{}})
//   useEffect( () => {
//     getAPIData('/api/about/value',setData)
//   }, [])

//   return (
//     <Container className="grid grid-cols-3 gap-10">
//           <div className="col-span-1 grid content-center gap-3">
//             <TEXT_1 text={data.title?.title} />
//             <TEXT_1 text={data.title?.content} fontSize={"18px"} color={theme.colors.gray1} fontWeight={500}/>
//           </div>
//           <Content className="col-span-2 grid grid-flow-row grid-cols-2 gap-7 p-[60px] border-[1px] rounded-[12px] border-gray-1 bg-gray-2">
//             {Object.keys(data.sections).length>0 && data.sections.map(({title,content,icon},index) => {
//               return (
//                 <div key={index} >
//                     <div className="flex gap-5">
//                       <IMG className="" width={34} height={34} path={icon}/>
//                       <TEXT_1 text={title} fontSize={"24px"}/>
//                     </div>
//                     <TEXT_1 text={content} fontSize={"18px"} color={theme.colors.gray1} fontWeight={500} />
//                 </div>
//               );
//             })}
//           </Content> 
//     </Container>
//   );
// };
import React from 'react';

export default () => (
	<div>
		<h1>Value</h1>
	</div>
);