
"use client";

import React, { useState, useEffect} from "react";
import { ExploreAction } from '../../store/Context';

import {getAPIData} from '../../utility/API';
import GEN_Component from "../ui/genComponent_1"


export default () => {
  const [data, setData] = useState({title:"",content:"",url:""})

  type visitWebsiteType = (parameter: string) => (e: React.MouseEvent) => void;

  const visitWebsiteButton:visitWebsiteType = (parameter) => (e) => {
    console.log(`Contact ${parameter}`)
  }
  useEffect( () => {
    getAPIData('realestate/about/start',setData)
  }, [])
  return (
    <ExploreAction.Provider value={visitWebsiteButton(data.url)}>
      <GEN_Component text_1={"Since "+data.title} text_2={data.content} buttonText={"Explore Properties"} />
    </ExploreAction.Provider>
  );
};