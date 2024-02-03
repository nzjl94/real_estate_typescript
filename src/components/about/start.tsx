import React, { useState, useEffect, MouseEvent} from "react";
import { ExploreAction } from '../../store/Context';
import GEN_Component from "../ui/genComponent_1"
import {getAPIData} from '../../utility/API';

export default () => {
  const [data, setData] = useState({title:"",content:"",url:""})

	type visitWebsiteType = (parameter: string) => (e: React.MouseEvent) => void;

	const visitWebsiteButton:visitWebsiteType  = (parameter) => (e) => {
		console.log(`About Us ${parameter}`)
	}
  
  useEffect( () => {
    getAPIData('about_start',setData)
  }, [])

  return (
    <ExploreAction.Provider value={visitWebsiteButton(data.url)}>
      <GEN_Component text_1={"Since "+data.title} text_2={data.content} buttonText={"Explore Properties"} />
    </ExploreAction.Provider>
  );
};