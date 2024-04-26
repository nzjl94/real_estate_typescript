import React                from 'react'

import styled,{ useTheme }  from "styled-components"
import TEXT                 from "../elements/TEXT"
import BUTTON               from "../elements/BUTTON"
import IMG                  from "../elements/IMAGE"

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

const CARD_STYLE_2 = ({id,image,title,content,detail,price}:COMPONET_TYPE) => {

    type cardActionType = (e: React.MouseEvent,parameter: string) => void;
	const cardAction:cardActionType  = (event,parameter) => {
		console.log(event,`Hi ${parameter}`)
	}

    const propertyDetail =(imgName:string,text:string)=>{
        const imageProp={width:21,height:21,activeBorder:false,path:`/image/home/property/${imgName}.svg`}
        const textProp={fontSize:"14px",fontWeight:500,text}
        return (<div className='grid grid-flow-col gap-x-[5px] py-[8px] px-[14px] rounded-[28px] border border-gray-1 bg-gray-1 place-items-center'>
            <IMG {...imageProp}  />
            <TEXT {...textProp}   />
        </div>)
    }

    const theme = useTheme();
    const Item = styled.div`${({theme}) => ``}`;

    const TEXT_STYLE={
        fontSize:theme.fontSizes.header.xs,
        fontWeight:theme.fontWeight.m,
        color:theme.colors.gray1
    }
    
    return <Item key={id} className='grid grid-flow-col grid-rows-2 gap-y-[30px] p-[40px] rounded-[12px] bg-gray-2 border border-gray-1' >
        <div className="col-start-1 col-span-1 m-2">
            <img  src={image} width={0} height={0} sizes="100%" className="h-auto w-full rounded-[10px]" /> 
        </div>
        <div className='grid grid-flow-row gap-y-[30px]'>
            <TEXT className='text-left' text={title} fontSize={theme.fontSizes.header.s} />
            <TEXT className='text-left' text={content}  {...TEXT_STYLE} />
            <div className='grid grid-flow-col place-items-center'> 
                {propertyDetail("bed",`${detail["bed"]} - Bedroom`)}
                {propertyDetail("bath",`${detail["bath"]} - Bathroom`)}
                {propertyDetail("building",detail["type"])}
            </div>
            <div className='grid grid-flow-row grid-cols-6 gap-x-[30px] h-[63px]'>
                <div className='row-start-1 col-span-2'>
                    <TEXT className='text-left' text="Price"  {...TEXT_STYLE} />
                </div>
                <div className='row-start-2 col-span-2'>
                    <TEXT className='text-left' text={`$ ${price.toString()}`} fontSize='22px' />
                </div>
                <div className='row-start-1 col-span-4 row-span-2 grid place-items-center '>
                    <BUTTON 
                        text="View Property Details" 
                        localAction={cardAction} 
                        type="directButton" 
                        className='bg-purple-1 py-[18px] px-[24px] rounded-[10px] w-full'
                        textClass="text-center" 
                    />
                </div>
            </div>
        </div>
    </Item>
}

export default CARD_STYLE_2