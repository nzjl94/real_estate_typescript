import React from 'react'

import { RootState } 		from '../../store/Reducer';
import {getSingleTitle} 	from '../../store/slice/title';
import { useSelector }      from 'react-redux';

import HEADER               from "../ui/HEADER"
import styled               from "styled-components";

import CARD1                from "../ui/CARD_STYLE_1"
import CARD2                from "../ui/CARD_STYLE_2"

interface COMPONENT_TYPE {
    data:Array<{text:string;title:string;icon?:string;}>
}
const Value = ({data}:COMPONENT_TYPE) => {

    const learnButton = (event:React.MouseEvent<HTMLButtonElement>)=>{
        console.log("Hello You")
    }
    const Container = styled.div`${({theme}) => ``}`;
    
    const {title,content} = useSelector((state: RootState) => getSingleTitle(state, "service_value"));
    return <>
        <HEADER title={title} content={content} />
        <Container className="my-[50px] grid grid-flow-row grid-cols-3  gap-[30px] items-stretch">{
            data.map((row,index) => data.length-1!==index? 
                <CARD1 index={index} {...row} />
                :<CARD2 index={index} parentClass="col-span-2" action={learnButton} {...row} />
        )}</Container>
    </>
}
export default Value