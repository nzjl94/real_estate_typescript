import React                from 'react'

import styled,{ useTheme }  from "styled-components"
import TEXT                 from "../elements/TEXT"
import IMG                  from "../elements/IMAGE"

interface COMPONET_TYPE{
    id:number;
    star:number;
    content:string;
    title:string;
    image:string;
    name:string;
    location:string;
}

const CARD_STYLE_5 = ({id,star,image,title,content,name,location}:COMPONET_TYPE) => {

    const theme = useTheme();
    const Item = styled.div`${({theme}) => ``}`;

    const TEXT_STYLE={
        fontSize:theme.fontSizes.header.xs,
        fontWeight:theme.fontWeight.m,
    }
    return <Item key={id} className='grid grid-flow-row gap-y-[40px] p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px] rounded-[12px] bg-gray-2 border border-gray-1' >
        <div className="flex flex-row gap-x-[10px] items-start ">
            {
                [...Array(star).keys()].map((value)=>(
                    <IMG 
                        width={24} height={24} 
                        responsive="set2"
                        path={"/image/home/client/star.svg"} activeBorder={false} 
                        parentClass="w-fit bg-gray-1 p-[6px] lg:p-[8px] xl:p-[10px] rounded-[100px] border border-gray-1" 
                    />
                ))
            }

        </div>
        <div className="grid grid-flow-row gap-y-[14px]">
            <TEXT className='text-left' text={title} fontSize={theme.fontSizes.header.s} />
            <TEXT className='text-left' text={content}  {...TEXT_STYLE} />
        </div>
        <div className="grid grid-flow-row grid-cols-5 gap-x-[14px]">
            <IMG width={60} height={60} responsive="set3" path={image} activeBorder={false} parentClass="row-span-2 col-span-1 w-fit" />
            <TEXT className='col-start-2 col-span-4 text-left' text={name}      fontWeight={500} fontSize='20px' />
            <TEXT className='col-start-2 col-span-4 text-left' text={location}  fontWeight={500} fontSize='18px' color={theme.colors.gray1} />
        </div>
    </Item>
}
export default CARD_STYLE_5