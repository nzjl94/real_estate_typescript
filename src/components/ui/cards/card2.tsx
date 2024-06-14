import { useTheme }                 from "styled-components"
import {cardActionType,CARD2_TYPE}  from "../../../utility/types/typeApp"
import {TEXT,BUTTON,IMAGE}          from "../elements"

const propertyDetail =(imgName:string,text:string)=>{
    const textProp={}

    return (<div className='grid grid-flow-col gap-x-[5px] py-[8px] px-[10px] rounded-[28px] cp-color-2 place-items-center'>
        <IMAGE width={21} height={21} activeBorder={false} path={`/image/home/property/${imgName}.svg`} parentClass="w-fit" />
        <TEXT responsive="set12" fontWeight={500} text={text}   />
    </div>)
}
const cardAction:cardActionType  = (event,parameter) => {
    console.log(event,`Hi ${parameter}`)
}

const CARD2 = ({id,image,title,content,detail,price}:CARD2_TYPE) => {
    const theme = useTheme();
    const TEXT_STYLE={
        fontWeight:theme.fontWeight.m,
        color:theme.colors.gray1
    }
    return <div key={id} className='flex flex-col gap-y-[30px] cp-pd-1 rounded-[12px] cp-color-1' >
        <div className="col-start-1 col-span-1 m-2 w-fit">
            <img  src={image} width={0} height={0} sizes="100%" className="h-auto w-full rounded-[10px]" /> 
        </div>
        <div className='grid grid-flow-row gap-y-[30px]'>
            <TEXT className='text-left' text={title} responsive='set7' />
            <TEXT className='text-left' text={content}  {...TEXT_STYLE} responsive='set2' />
            <div className='flex flex-row flex-wrap justify-around gap-x-[0px] gap-y-[6px]'> 
                {propertyDetail("bed",`${detail["bed"]} - Bed`)}
                {propertyDetail("bath",`${detail["bath"]} - Bath`)}
                {propertyDetail("building",detail["type"])}
            </div>
            <div className='flex justify-between gap-x-[20px] lg:gap-x-[30px]'>
                <div className='flex flex-col justify-around'>
                    <TEXT className='text-left' text="Price"  {...TEXT_STYLE} responsive='button_set' />
                    <TEXT className='text-left' text={`$${price.toString()}`} responsive='set2' />
                </div>
                <div className='grid place-items-center'>
                    <BUTTON 
                        text="Property Details" localAction={cardAction} textClass="text-center" type="directButton" 
                        className='bg-purple-1 py-[14px] lg:py-[18px] px-[20px] md:px-[18px] lg:px-[20px] xl:px-[22px] rounded-[10px] w-full'
                    />
                </div>
            </div>
        </div>
    </div>
}
export default CARD2