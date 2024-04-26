import React from 'react'

import styled    from "styled-components";
import {useNavigate}        from 'react-router-dom';


import { ExploreAction }    from '../../store/Context';
import GEN_Component        from "../ui/components/genComponent_1"
import STAR                 from "../ui/components/STAR"

const Question = () => {

    const navigate = useNavigate();

    type propertyActionType = () => (e: React.MouseEvent) => void;

	const propertyAction:propertyActionType  = () => (e) => {
		navigate(`/property`)
	}

    const data ={
        title:"Frequently Asked Questions",
        content:"Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.",
        buttonText:"View All FAQ’s",
        parentClass:"mb-[80px]",
        buttonClass:"bg-gray-1 border-gray-1"
    }

    const Container = styled.div`${({theme}) => ``}`;
    
    return <Container className='px-[162px]   py-[75px] relative'>
        <STAR parentClass={"top-[50px] left-[60px]"} />

        <ExploreAction.Provider value={propertyAction()}>
            <GEN_Component {...data} />
        </ExploreAction.Provider>
    </Container>
        
}
export default Question