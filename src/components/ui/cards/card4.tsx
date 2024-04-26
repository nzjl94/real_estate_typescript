import React                from 'react'

import styled,{ useTheme }  from "styled-components"
import TEXT                 from "../elements/TEXT"
import BUTTON               from "../elements/BUTTON"
import IMG                  from "../elements/IMAGE"

interface COMPONET_TYPE{
    id:number;
    content:string;
    title:string;
}

const CARD_STYLE_2 = ({id,title,content}:COMPONET_TYPE) => {

    type cardActionType = (parameter: number)=>(e: React.MouseEvent) => void;
	const cardAction:cardActionType  = (parameter) => (event) => {
		console.log(event,`Hi ${parameter}`)
	}

    const theme = useTheme();
    const Item = styled.div`${({theme}) => ``}`;

    const TEXT_STYLE={
        fontSize:theme.fontSizes.header.xs,
        fontWeight:theme.fontWeight.m,
        color:theme.colors.gray1
    }
    
    return <Item key={id} className='flex flex-col items-start gap-y-[30px] p-[50px] rounded-[12px] bg-gray-2 border border-gray-1' >
        <TEXT className='text-left' text={title} fontSize={theme.fontSizes.header.s} />
        <TEXT className='text-left' text={content}  {...TEXT_STYLE} />
        <BUTTON 
            text="Read More" localAction={cardAction(id)} type="directButton" textClass="text-center" 
            className='px-[24px] py-[18px] rounded-[10px] border-[1px] border-gray-1 bg-gray-2'
        />  
    </Item>
}

export default CARD_STYLE_2