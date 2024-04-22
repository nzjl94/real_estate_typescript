import React from 'react'

import { RootState } 		from '../../store/Reducer';
import {getSingleTitle} 	from '../../store/slice/title';
import { useSelector }      from 'react-redux';

import styled               from "styled-components";

import HEADER               from "../ui/HEADER"
import CARD1                from "../ui/CARD_STYLE_1"
import CARD2                from "../ui/CARD_STYLE_2"

import {SERVICE_TYPE}       from "../../utility/typeApp"

const Management = ({data}:SERVICE_TYPE) => {

    const learnButton = (event:React.MouseEvent<HTMLButtonElement>)=>{
        console.log("Hiiiiii You")
    }
    const Container = styled.div`${({theme}) => ``}`;

    const Component = styled.div`${({theme}) => ``}`;
    const {title,content} = useSelector((state: RootState) => getSingleTitle(state, "service_management"));
    return <Component className='pt-[120px] px-[162px]'>
        <HEADER title={title} content={content} parentClass='mb-[60px]'/>
        <Container className="grid grid-flow-row grid-cols-3 gap-[30px] items-stretch">{
            data.map((row,index) => data.length-1!==index? 
                <CARD1 index={index} {...row} />
                :<CARD2 index={index} parentClass="col-span-2" action={learnButton} {...row} />
        )}</Container>
    </Component>
}
export default Management