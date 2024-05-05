import React                from 'react'


import {TEXT_STYLE_3,API_DATA_5}    from '../../../utility/types/typeApp';

import styled,{ useTheme }          from "styled-components"
import TEXT                         from "../elements/TEXT"
import IMG                          from "../elements/IMAGE"
import {CardStyle1}                 from "../../../utility/types/styleApp"

interface COMPONET_TYPE extends API_DATA_5{
    index:number;
    background?:string;
}

const CARD_STYLE_1 = ({index,icon,title,text,background}:COMPONET_TYPE) => {

    const theme = useTheme();

    const Item = styled(CardStyle1)<TEXT_STYLE_3>`${({theme,background}) => `
        background: ${background!==undefined?background:theme.colors.gray5};
    `}`;
    const TEXT_STYLE={
        fontSize:theme.fontSizes.header.xs,
        fontWeight:theme.fontWeight.m,
        color:theme.colors.gray1
    }
    return <Item key={index} className='grid grid-cols-4 gap-x-2 gap-y-[15px] p-[30px]' background={background} >
    <div className="col-start-1 col-span-1 m-2">
        <IMG width={34} height={34} path={icon} activeBorder={true} />
    </div>
    <TEXT className='col-start-2 col-span-3 text-left' text={title} fontSize={theme.fontSizes.header.s} />
    <TEXT className='col-start-1 col-end-5 text-left'  text={text}  {...TEXT_STYLE} />
</Item>
}

export default CARD_STYLE_1