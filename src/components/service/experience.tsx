import React from 'react'

import { RootState } 		from '../../store/Reducer';
import {getSingleTitle} 	from '../../store/slice/title';
import { useSelector }      from 'react-redux';

import HEADER               from "../ui/HEADER"
import styled               from "styled-components";
import IMG                  from "../ui/IMAGE";
import TEXT                 from "../ui/TEXT"

import {SERVICE_TYPE}                   from "../../utility/typeApp"
import {CardStyle1,BackgroundStyle1}    from "../../utility/styleApp"


const Experience = ({data}:SERVICE_TYPE) => {    
    const imageSize : {[key: string]: number}={width:34,height:34}
    const Component = styled(BackgroundStyle1)`${({theme}) => ``}`;
    const Container = styled.div`${({theme}) => `
        border: 1px solid ${theme.colors.gray2};
    `}`;
    const Item = styled(CardStyle1)`${({theme}) => `
        padding: 30px 16px;
        background: ${theme.colors.gray5};
    `}`;

    const reDirectionButton = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>,index:number)=>{
        console.log(event,index)
    }
    const {title,content} = useSelector((state: RootState) => getSingleTitle(state, "service_experience"));

    
    return <Component>
        <HEADER title={title} content={content} parentClass="py-[100px] pl-[80px]" backgroundStyle={BackgroundStyle1}/>
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