
import { RootState } 		            from '../../store/Reducer'
import {getSingleTitle} 	            from '../../store/slice/title'
import { useSelector }                  from 'react-redux';
import styled,{ useTheme }              from "styled-components"

import CARD1                            from "../ui/cards/card1"
import TEXT                             from "../ui/elements/TEXT"
import HEADER                           from "../ui/components/HEADER"


import {SERVICE_TYPE}                   from "../../utility/types/typeApp"
import {ImageContainer,ButtonStyle1}    from "../../utility/types/styleApp"



const Button = styled(ButtonStyle1)`${({theme}) => `
    padding: 14px 20px;
`}`;

const Investment = ({data}:SERVICE_TYPE) => {

    const theme = useTheme();
    const {title,content} = useSelector((state: RootState) => getSingleTitle(state, "service_investment_title"));
    const {title:subtitle,content:subcontent} = useSelector((state: RootState) => getSingleTitle(state, "service_investment_subtitle"));

    
  
    return <div className="flex flex-col md:flex-row gap-y-[40px] md:gap-x-[30px] lg:gap-x-[50px] xl:gap-x-[60px]" id="service_investment">
        <div className='flex flex-col justify-between gap-y-[30px] lg:gap-y-[40px] xl:gap-y-[50px]'>
            <HEADER title={title} content={content} parentClass='grid-cols-4' />

            <ImageContainer className='flex flex-col gap-y-[20px] lg:gap-y-[30px] p-[24px] md:p-[30px] lg:p-[40px] xl:p-[50px]'>
                <TEXT text={subtitle}   responsive='set10' />
                <TEXT text={subcontent} responsive='set2' fontWeight={theme.fontWeight.m} color={theme.colors.gray1}/>
                <Button onClick={(e)=>alert(111)}>
                    <TEXT text="Learn More" fontSize="14px" fontWeight={theme.fontWeight.m} />
                </Button>
            </ImageContainer>
        </div>
        <div className='p-[10px] rounded-[12px] bg-gray-1 md:col-start-2 md:col-span-2 grid grid-cols-1 md:grid-cols-2  gap-[10px] md:items-stretch'>{
            data.map((row,index) => <CARD1 index={index} {...row} background={theme.colors.gray4} />
        )}</div>
    </div>
    
}
export default Investment