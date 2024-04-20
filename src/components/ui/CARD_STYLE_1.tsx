import React                from 'react'

import styled,{ useTheme }  from "styled-components"
import TEXT                 from "./TEXT"
import IMG                  from "../ui/IMAGE"


type COMPONET_TYPE={
    index:number;
    text:string;
    title:string;
    icon?:string;
}
const CARD_STYLE_1 = ({index,icon,title,text}:COMPONET_TYPE) => {

    const theme = useTheme();

    const Item = styled.div`${({theme}) => `
        align-items: center;
        border-radius: 12px;
        border: 1px solid ${theme.colors.gray2};
        background: ${theme.colors.gray5};
    `}`;
    const TEXT_STYLE={
        fontSize:theme.fontSizes.header.xs,
        fontWeight:theme.fontWeight.m,
        color:theme.colors.gray1
    }
    return <Item key={index} className='grid grid-cols-4 gap-x-2 gap-y-[15px] p-[30px]' >
    <div className="col-start-1 col-span-1 m-2">
        <IMG width={34} height={34} path={icon} activeBorder={true} />
    </div>
    <TEXT className='col-start-2 col-span-3 text-left' text={title} fontSize={theme.fontSizes.header.s} />
    <TEXT className='col-start-1 col-end-5 text-left'  text={text}  {...TEXT_STYLE} />
</Item>
}

export default CARD_STYLE_1