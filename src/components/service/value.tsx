import React from 'react'

import { RootState } 		from '../../store/Reducer';
import {getSingleTitle} 	from '../../store/slice/title';
import { useSelector }      from 'react-redux';
import HEADER               from "../ui/HEADER"
import styled               from "styled-components";
import CARD1                from "../ui/CARD_STYLE_1"
import CARD2                from "../ui/CARD_STYLE_2"
import {SERVICE_TYPE}       from "../../utility/typeApp"

const Value = ({data}:SERVICE_TYPE) => {

    const learnButton = (event:React.MouseEvent<HTMLButtonElement>)=>{
        console.log("Hello You")
    }
    const Component = styled.div`${({theme}) => ``}`;
    const Container = styled.div`${({theme}) => ``}`;
    
    const {title,content} = useSelector((state: RootState) => getSingleTitle(state, "service_value"));
    return <Component className='px-[80px] pt-[120px]'>
        <HEADER title={title} content={content} />
        <Container className="mt-[60px] grid grid-flow-row grid-cols-3  gap-[30px] items-stretch">{
            data.map((row,index) => data.length-1!==index? 
                <CARD1 index={index} {...row} />
                :<CARD2 index={index} parentClass="col-span-2" action={learnButton} {...row} />
        )}</Container>
    </Component>
}
export default Value