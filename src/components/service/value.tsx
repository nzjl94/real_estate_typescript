import React from 'react'

import { RootState } 		from '../../store/Reducer';
import {getSingleTitle} 	from '../../store/slice/title';
import { useSelector }      from 'react-redux';

import HEADER               from "../ui/HEADER"
import TEXT               from "../ui/TEXT_ELEMENT"
import styled               from "styled-components";
import IMG                  from "../ui/IMAGE";



const Value = () => {

    type data_type= Array<{
        text:string;
        title:string;
        icon:string;
    }>
    const data:data_type =[
        {"text":"Discover the true worth of your property with our expert valuation services.", title:"Valuation Mastery" ,"icon":"/image/service/service1.svg"},
        {"text":"Selling a property requires more than just a listing; it demands a strategic marketing approach.", title:"Strategic Marketing" ,"icon":"/image/service/service2.svg"},
        {"text":"Negotiating the best deal is an art, and our negotiation experts are masters of it.", title:"Negotiation Wizardry" ,"icon":"/image/service/service3.svg"},
        {"text":"A successful sale is not complete until the closing. We guide you through the intricate closing process.", title:"Closing Success" ,"icon":"/image/service/service4.svg"},
        {"text":"Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.", title:"Unlock the Value of Your Property Today" ,"icon":""}
    ]
    const reDirectionButton = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>,index:number)=>{
        console.log(event,index)
    }
    const Container = styled.div`${({theme}) => `
        
    `}`;
    const Item = styled.div`${({theme}) => `
        align-items: center;
        border-radius: 12px;
        border: 1px solid var(--Grey-15, #262626);
        background: var(--Grey-10, #1A1A1A);
    `}`;
    const {title,content} = useSelector((state: RootState) => getSingleTitle(state, "service_value"));
    
    return <>
        <HEADER title={title} content={content} />

        <Container className="my-[50px] grid grid-flow-row grid-cols-3  gap-5 items-stretch">
            {data.map(({text,icon},index) => {
                if (data.length-1!==index ){
                    return <Item key={index} className='grid grid-cols-4 gap-x-2 gap-y-[15px] p-[30px]' >
                        <div className="col-start-1 col-span-1 m-2">
                            <IMG width={34} height={34} path={icon} activeBorder={true} />
                        </div>
                        <TEXT className='col-start-2 col-span-3 text-left' text={title} fontSize={"24px"} />
                        <TEXT className='col-start-1 col-end-5 text-left'  text={text}  fontSize={"18px"} fontWeight={500} color="#999" />
                    </Item>
                }else{
                    return <Item key={index} className='col-span-2' >{text}</Item>
                }
            }
        )}
        </Container>
    </>
}

export default Value