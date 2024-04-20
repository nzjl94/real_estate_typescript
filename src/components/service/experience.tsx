import React from 'react'

import { RootState } 		from '../../store/Reducer';
import {getSingleTitle} 	from '../../store/slice/title';
import { useSelector }      from 'react-redux';

import HEADER               from "../ui/HEADER"
import styled               from "styled-components";
import IMG                  from "../ui/IMAGE";
import TEXT                 from "../ui/TEXT"



interface COMPONENT_TYPE {
    data:Array<{text:string;icon:string;}>
}
const Experience = ({data}:COMPONENT_TYPE) => {    
    const imageSize : {[key: string]: number}={width:34,height:34
    }
    const reDirectionButton = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>,index:number)=>{
        console.log(event,index)
    }
    const Container = styled.div`${({theme}) => `
        display: flex;
        padding: 20px;
        align-items: center;
        gap: 20px;
        align-self: stretch;
        border: 1px solid var(--Grey-15, #262626);
        background: var(--Grey-08, #141414);
        box-shadow: 0px 0px 0px 10px #191919;
    `}`;
    const Item = styled.div`${({theme}) => `
        display: flex;
        padding: 40px 20px;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        flex: 1 0 0;
        border-radius: 12px;
        border: 1px solid var(--Grey-15, #262626);
        background: var(--Grey-10, #1A1A1A);
    `}`;
    const {title,content} = useSelector((state: RootState) => getSingleTitle(state, "service_experience"));
    
    return <>
        <HEADER title={title} content={content} />
        <Container className="my-[50px]">
            {data.map(({text,icon},index) => <Item key={index} className='relative' >
                <button className="absolute top-[10px] right-[10px]" onClick={(e)=>reDirectionButton(e,index)}>
                    <IMG {...imageSize} activeBorder={false} path="/image/service/direction.svg"/>
                </button> 
                <IMG {...imageSize}     activeBorder={true}  path={icon} />
                <TEXT text={text} fontSize="20px" />
            </Item>)}
        </Container>
    </>
}

export default Experience