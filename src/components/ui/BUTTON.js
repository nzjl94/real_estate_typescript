"use client";

import React  from "react";
import Link from 'next/link'
import styled from "styled-components";
import { useContext } from 'react';
import { ExploreAction } from '../store/Context';

const LinkElement = styled(Link)`${({theme}) => `  
`}`;
const ButtonElement = styled.button`${({theme}) => `  
`}`;

export default ({type="link",text="",url="",className="px-[24px] py-[16px] rounded-[10px] border-[1px] border-gray-1 bg-gray-2"}) => {
    let OUTPUT
    if (type=="link"){
        OUTPUT=(<LinkElement href={url} className={className}>{text}</LinkElement>)
    }else if(type=="button"){
        OUTPUT=(<ButtonElement className={className} onClick={useContext(ExploreAction)} >{text}</ButtonElement>)
    }
    return OUTPUT;
};