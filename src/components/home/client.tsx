import React from 'react'

import styled               from "styled-components";
import {useNavigate}        from 'react-router-dom';


import { ExploreAction }    from '../../store/Context';
import GEN_Component        from "../ui/components/genComponent_1"
import STAR                 from "../ui/components/STAR"
import CardList             from "./cardList/client";


const Client = () => {

    const navigate = useNavigate();

    type propertyActionType = () => (e: React.MouseEvent) => void;

	const propertyAction:propertyActionType  = () => (e) => {
		navigate(`/property`)
	}

    const data ={
        title:"What Our Clients Say",
        content:"Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.",
        buttonText:"View All Testimonials",
        parentClass:"mb-[80px]",
        buttonClass:"bg-gray-1 border-gray-1"
    }

    const Container = styled.div`${({theme}) => ``}`;
    
    return <Container className='px-[16px] lg:px-[80px] xl:px-[160px]   py-[75px] relative'>
        <STAR parentClass={"top-[50px] left-[60px]"} />

        <ExploreAction.Provider value={propertyAction()}>
            <GEN_Component {...data} />
        </ExploreAction.Provider>
        <CardList />
    </Container>
        
}
export default Client