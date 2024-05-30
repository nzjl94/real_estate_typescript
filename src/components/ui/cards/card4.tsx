import {FC}                 from 'react'
import {
    CARD_4_Action_Type,CARD4_TYPE
}                           from '../../../utility/types/typeApp';
import { useTheme }         from "styled-components"
import {TEXT,BUTTON}        from "../elements"

const cardAction:CARD_4_Action_Type  = (parameter) => (event) => {
    console.log(event,`Hi ${parameter}`)
}
const CARD4:FC<CARD4_TYPE>= ({id,title,content}) => {
    const theme = useTheme();
    const TEXT_STYLE={
        fontSize:theme.fontSizes.header.xs,
        fontWeight:theme.fontWeight.m,
        color:theme.colors.gray1
    }
    return <div key={id} className='flex flex-col items-start gap-y-[30px] p-[50px] rounded-[12px] bg-gray-2 border border-gray-1' >
        <TEXT className='text-left' text={title} fontSize={theme.fontSizes.header.s} />
        <TEXT className='text-left' text={content}  {...TEXT_STYLE} />
        <BUTTON 
            text="Read More" localAction={cardAction(id)} type="directButton" textClass="text-center" 
            className='px-[24px] py-[18px] rounded-[10px] border-[1px] border-gray-1 bg-gray-2'
        />  
    </div>
}
export default CARD4