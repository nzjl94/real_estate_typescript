import React                            from 'react'
import styled,{ useTheme }              from "styled-components"
import {TEXT}                           from "../elements"
import {ButtonStyle1,CardStyle1}        from "../../../utility/types/styleApp"
import {API_DATA_5}                     from '../../../utility/types/typeApp';

interface COMPONET_TYPE extends API_DATA_5{
    index:number;
    parentClass:string;
    action:(event:React.MouseEvent<HTMLButtonElement>)=>void
}
const Button = styled(ButtonStyle1)`${({theme}) => `
    padding: 18px 24px;
`}`;
const CARD3 = ({index,title,text,parentClass,action}:COMPONET_TYPE) => {

    const theme = useTheme();

    const TEXT_STYLE={
        fontSize:theme.fontSizes.header.xs,
        fontWeight:theme.fontWeight.m
    }
    return <CardStyle1 key={index} className={`${parentClass} grid grid-cols-6 gap-x-2 gap-y-[15px] p-[50px]`} >
        <TEXT text={title} className='col-start-1 col-span-4 text-left' fontSize={theme.fontSizes.header.s} />
        <div  className="col-start-6 col-span-1 text-right">
            <Button className="" onClick={(e)=>action(e)}>
                <TEXT text="Learn More" {...TEXT_STYLE} />
            </Button>
        </div>
        <TEXT text={text} {...TEXT_STYLE} className='col-start-1 col-end-7 text-left'   color={theme.colors.gray1} />
    </CardStyle1>
}
export default CARD3