import React                from 'react'
import styled,{ useTheme }  from "styled-components"
import TEXT                 from "./TEXT"


type COMPONET_TYPE={
    index:number;
    text:string;
    title?:string;
    icon?:string;
    parentClass:string;
    action:(event:React.MouseEvent<HTMLButtonElement>)=>void
}
const CARD_STYLE_2 = ({index,title,text,parentClass,action}:COMPONET_TYPE) => {

    const theme = useTheme();

    const Item = styled.div`${({theme}) => `
        align-items: center;
        border-radius: 12px;
        border: 1px solid ${theme.colors.gray2};


        background-image: url('/image/service/background.svg');
        background-size: cover; 
        background-position: center; 
        background-repeat: no-repeat;
        background-color: ${theme.colors.gray5};
    `}`;

    const Button = styled.button`${({theme}) => `
        border-radius: 10px;
        border: 1px solid ${theme.colors.gray2};
        background: ${theme.colors.gray4};
        padding: 18px 24px;
    `}`;

    const TEXT_STYLE={
        fontSize:theme.fontSizes.header.xs,
        fontWeight:theme.fontWeight.m
    }
    return <Item key={index} className={`${parentClass} grid grid-cols-6 gap-x-2 gap-y-[15px] p-[50px]`} >
        <TEXT text={title} className='col-start-1 col-span-4 text-left' fontSize={theme.fontSizes.header.s} />
        <div  className="col-start-6 col-span-1 text-right">
            <Button onClick={(e)=>action(e)}>
                <TEXT text="Learn More" {...TEXT_STYLE} />
            </Button>
        </div>
        <TEXT text={text} {...TEXT_STYLE} className='col-start-1 col-end-7 text-left'   color={theme.colors.gray1} />
    </Item>
}

export default CARD_STYLE_2