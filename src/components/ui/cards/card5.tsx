import { useTheme }         from "styled-components"
import {TEXT,IMAGE}         from "../elements"
import {CARD5_TYPE}         from "../../../utility/types/typeApp"

const CARD5 = ({id,star,image,title,content,name,location}:CARD5_TYPE) => {
    const theme = useTheme();
    const TEXT_STYLE={
        fontSize:theme.fontSizes.header.xs,
        fontWeight:theme.fontWeight.m,
    }
    return <div key={id} className='grid grid-flow-row gap-y-[40px] p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px] rounded-[12px] bg-gray-2 border border-gray-1' >
        <div className="flex flex-row gap-x-[10px] items-start ">
            {
                [...Array(star).keys()].map((value)=>(
                    <IMAGE 
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
            <IMAGE width={60} height={60} responsive="set3" path={image} activeBorder={false} parentClass="row-span-2 col-span-1 w-fit" />
            <TEXT className='col-start-2 col-span-4 text-left' text={name}      fontWeight={500} fontSize='20px' />
            <TEXT className='col-start-2 col-span-4 text-left' text={location}  fontWeight={500} fontSize='18px' color={theme.colors.gray1} />
        </div>
    </div>
}
export default CARD5