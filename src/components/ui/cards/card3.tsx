import React                            from 'react'
import styled,{ useTheme }              from "styled-components"
import {TEXT}                           from "../elements"
import {ButtonStyle1,CardStyle1}        from "../../../utility/types/styleApp"
import {API_DATA_5}                     from '../../../utility/types/typeApp';

interface COMPONET_TYPE extends API_DATA_5 {
    index:number;
    parentClass:string;
    action:(event:React.MouseEvent<HTMLButtonElement>)=>void
}
const Button = styled(ButtonStyle1)`${({theme}) => `
    padding: 18px 24px;
`}`;
const CARD3 = ({index,title,text,parentClass,action}:COMPONET_TYPE) => {

    const theme = useTheme();

    return <CardStyle1 key={index} className={`${parentClass} flex flex-col gap-y-[20px] lg:gap-y-[30px] p-[24px] md:p-[30px] lg:p-[40px] xl:p-[50px]`} >

        <div  className="flex flex-col md:flex-row gap-[20px] justify-between items-center">
            <TEXT text={title} className='text-left' responsive='set9' />
            <Button className="w-full" onClick={(e)=>action(e)}>
                <TEXT text="Learn More" fontWeight={500} responsive='button_set' className='text-center' />
            </Button>
        </div>
        <TEXT text={text} fontWeight={500} responsive='set2' className='text-left'   color={theme.colors.gray1} />
    </CardStyle1>
}
export default CARD3