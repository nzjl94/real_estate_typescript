import React                from 'react'
import styled               from "styled-components";

import {IMAGE as IMG,TEXT}  from "../elements/";
import {SERVICE_TYPE}       from "../../../utility/types/typeApp"
import {CardStyle1}         from "../../../utility/types/styleApp"

const CARD_LIST:React.FC<SERVICE_TYPE> = ({data}) => {

    const imageSize : {[key: string]: number}={width:34,height:34}

    const Container = styled.div`${({theme}) => `
        border: 1px solid ${theme.colors.gray2};
    `}`;
    const Item = styled(CardStyle1)`${({theme}) => `
        background: ${theme.colors.gray5};
    `}`;
    const reDirectionButton = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>,index:number)=>{
        console.log(event,index)
    }
    return <Container className="grid grid-cols-4 gap-[10px] p-[10px]">
      {data.map(({text,icon},index) => <Item key={index} className='col-span-2 md:col-span-1 grid grid-flow-row grid-cols-1 place-items-center gap-y-[16px] py-[30px] px-[16px] relative' >
          <button className="absolute top-[10px] right-[10px]" onClick={(e)=>reDirectionButton(e,index)}>
              <IMG {...imageSize} activeBorder={false} path="/image/service/direction.svg"/>
          </button> 
          <IMG     {...imageSize}   activeBorder={true}  path={icon} />
          <TEXT     text={text}     responsive='set5' className='text-center' />
      </Item>)}
    </Container>
}
export default CARD_LIST