"use client";

import React, { useState, useEffect} from "react";
import styled,{ useTheme } from "styled-components";

import HEADER from "../ui/HEADER"
import {getAPIData} from '../../utility/API'

const Container=styled.div`${({theme}) => ``}`;

export default () => {
  const [data, setData] = useState([])
  useEffect( () => {
    getAPIData('realestate/contact/explore',setData)
  }, [])
  return (
    <Container className="grid grid-cols-2 grid-flow-row gap-[20px] p-[80px]">
      {data.map((value,key)=>{
        if(key==3){
          return <div className="flex gap-[20px]">
              <img  src={value[0]} width={0} height={0} sizes="100%" className="h-auto w-[50%]" /> 
              <img  src={value[1]} width={0} height={0} sizes="100%" className="h-auto w-[50%]" />
          </div>
        }else if(key==4)
          return <HEADER title={value[0]} content={value[1]} parentClass="flex flex-col justify-center" />
        else
          return <img  src={value[0]} width={0} height={0} sizes="100%" className="h-auto w-full" />
      })}
    </Container>
  );
};