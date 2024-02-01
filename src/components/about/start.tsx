// import React, { useState, useEffect} from "react";
// import { ExploreAction } from '../../store/Context';
// import GEN_Component from "../general/genComponent_1"
// import {getAPIData} from '../../utility/API';

// export default () => {
//   const [data, setData] = useState({title:"",content:"",url:""})
//   const visitWebsiteButton = (parameter) => (event) => {
//     console.log(`About Us ${parameter}`)
//   }
  
//   useEffect( () => {
//     getAPIData('/api/about/start',setData)
//   }, [])

//   return (
//     <ExploreAction.Provider value={visitWebsiteButton(data.url)}>
//       <GEN_Component text_1={"Since "+data.title} text_2={data.content} buttonText={"Explore Properties"} />
//     </ExploreAction.Provider>
//   );
// };
import React from 'react';

export default () => (
	<div>
		<h1>Start</h1>
	</div>
);