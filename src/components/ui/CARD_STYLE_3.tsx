import React                from 'react'


import {}               from '../../utility/typeApp';

import styled,{ useTheme }          from "styled-components"
import TEXT                         from "./TEXT"
import IMG                          from "./IMAGE"
import {CardStyle1}                 from "../../utility/styleApp"


interface COMPONET_TYPE{
    id:number;
    price:number;
    content:string;
    title:string;
    image:string;
    detail: {
        bed:number;
        bath:number;
        type:string
    }
}

const CARD_STYLE_3 = ({id,image,title,content,detail}:COMPONET_TYPE) => {

    const theme = useTheme();

    const Item = styled.div`${({theme}) => `
        padding: 40px;
        border-radius: 12px;
        border: 1px solid var(--Grey-15, #262626);
        background: var(--Grey-08, #141414);

        .home-prop{
            padding: 8px 14px;
            border-radius: 28px;
            border: 1px solid var(--Grey-15, #262626);
            background: var(--Grey-10, #1A1A1A);
        }
    `}`;
    const TEXT_STYLE={
        fontSize:theme.fontSizes.header.xs,
        fontWeight:theme.fontWeight.m,
        color:theme.colors.gray1
    }
    
    return <Item key={id} className='grid grid-flow-col grid-rows-2 gap-y-[30px]' >
        <div className="col-start-1 col-span-1 m-2">
            <img  src={image} width={0} height={0} sizes="100%" className="h-auto w-full rounded-[10px]" /> 

        </div>
        <div className='grid grid-flow-row'>
            <TEXT className='text-left' text={title} fontSize={theme.fontSizes.header.s} />
            <TEXT className='text-left'  text={content}  {...TEXT_STYLE} />
            <div className='grid grid-flow-col place-items-center'>
                <div className='home-prop grid grid-flow-col'>
                    <IMG width={21} height={21} path="/image/home/property/bed.svg" activeBorder={false} parentClass='' />
                    <TEXT className='' text={`${detail["bed"]} - Bedroom`} fontSize={"18px"} />
                </div>
                <div className='home-prop grid grid-flow-col'>
                    <IMG width={21} height={21} path="/image/home/property/bath.svg" activeBorder={false} parentClass='' />
                    <TEXT className='' text={`${detail["bath"]} - Bathroom`} fontSize={"18px"} />

                </div>
                <div className='home-prop grid grid-flow-col'>
                    <IMG width={21} height={21} path="/image/home/property/building.svg" activeBorder={false} parentClass='' />
                    <TEXT className='' text={`${detail["type"]}`} fontSize={"18px"} />

                </div>
            </div>
            <div className=''></div>
        </div>
    </Item>
}

export default CARD_STYLE_3