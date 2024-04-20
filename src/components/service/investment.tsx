import React from 'react'

import { RootState } 		from '../../store/Reducer'
import {getSingleTitle} 	from '../../store/slice/title'
import { useSelector }      from 'react-redux';
import styled,{ useTheme }  from "styled-components"

import CARD1                from "../ui/CARD_STYLE_1"

import TEXT                 from "../ui/TEXT"


import {SERVICE_TYPE}       from "../../utility/typeApp"

const Investment = ({data}:SERVICE_TYPE) => {

    const theme = useTheme();


    const {title,content} = useSelector((state: RootState) => getSingleTitle(state, "service_investment_title"));
    const {title:subtitle,content:subcontent} = useSelector((state: RootState) => getSingleTitle(state, "service_investment_subtitle"));

    const Component = styled.div`${({theme}) => ``}`;

    const Container = styled.div`${({theme}) => `
        .subtitle-container {
            background-image: url('/image/service/background.svg');
            background-size: cover; 
            background-position: center; 
            background-repeat: no-repeat;
            background-color: #1A1A1A;
        }
        .card-container-1{
            background: ${theme.colors.gray5};
        }
    `}`;
    const Button = styled.button`${({theme}) => `
        border-radius: 10px;
        border: 1px solid ${theme.colors.gray2};
        background: ${theme.colors.gray4};
        padding: 14px 20px;

    `}`;

    const TEXT_STYLE={
        fontSize:"14px",
        fontWeight:theme.fontWeight.m
    }

    return <Component className='px-[80px]'>
        <Container className="my-[50px] grid grid-flow-row grid-cols-3 gap-x-[50px]">
            <div className='grid grid-flow-row grid-cols-1 gap-y-[10px]'>
                <div className='grid grid-flow-row grid-cols-1'>
                    <TEXT className='text-left' text={title}   fontSize={"38px"} />
                    <TEXT className='text-left' text={content} fontSize={"16px"} fontWeight={theme.fontWeight.m} color={theme.colors.gray1}/>
                </div>
                <div className='grid grid-flow-row grid-cols-1 p-[40px] subtitle-container'>
                    <TEXT className='text-left' text={subtitle}   fontSize={"22px"} />
                    <TEXT className='text-left' text={subcontent} fontSize={"16px"} fontWeight={theme.fontWeight.m} color={theme.colors.gray1}/>
                    <Button onClick={(e)=>alert(111)}>
                        <TEXT text="Learn More" {...TEXT_STYLE} />
                    </Button>
                </div>
            </div>
            <div className='p-[10px] rounded-[12px] card-container-1 col-start-2 col-span-2 grid grid-flow-row grid-cols-2  gap-[10px] items-stretch'>{
                data.map((row,index) => <CARD1 index={index} {...row} background={theme.colors.gray4} />
            )}</div>
        </Container>
    </Component>
    
}

export default Investment