import React from 'react'

import { RootState } 		from '../../store/Reducer';
import {getSingleTitle} 	from '../../store/slice/title';
import { useSelector }      from 'react-redux';

import HEADER               from "../ui/HEADER"
import styled               from "styled-components";
import IMG                  from "../ui/IMAGE";
import TEXT                 from "../ui/TEXT"

import {SERVICE_TYPE}       from "../../utility/typeApp"

const Experience = ({data}:SERVICE_TYPE) => {    
    const imageSize : {[key: string]: number}={width:34,height:34
    }
    const reDirectionButton = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>,index:number)=>{
        console.log(event,index)
    }
    const {title,content} = useSelector((state: RootState) => getSingleTitle(state, "service_experience"));

    const Component = styled.div`${({theme}) => `
        border-bottom: 1px solid var(--Grey-15, #262626);
        background: linear-gradient(96deg, #262626 -26.82%, rgba(38, 38, 38, 0.00) 40.46%);
    `}`;
    const Container = styled.div`${({theme}) => `
        border: 1px solid var(--Grey-15, #262626);
    `}`;
    const Item = styled.div`${({theme}) => `
        padding: 30px 16px;
        border-radius: 12px;
        border: 1px solid var(--Grey-15, #262626);
        background: var(--Grey-10, #1A1A1A);
    `}`;

    return <Component>
        <HEADER title={title} content={content} parentClass="py-[100px] pl-[80px]" />
        <Container className="grid grid-flow-row grid-cols-4 items-stretch gap-x-[10px] p-[10px]">
            {data.map(({text,icon},index) => <Item key={index} className='grid grid-flow-row grid-cols-1 place-items-center gap-y-[16px] relative' >
                <button className="absolute top-[10px] right-[10px]" onClick={(e)=>reDirectionButton(e,index)}>
                    <IMG {...imageSize} activeBorder={false} path="/image/service/direction.svg"/>
                </button> 
                <IMG {...imageSize}     activeBorder={true}  path={icon} />
                <TEXT text={text} fontSize="16px" />
            </Item>)}
        </Container>
    </Component>
}

export default Experience