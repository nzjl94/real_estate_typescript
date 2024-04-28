import React from 'react'

import styled               from "styled-components";
import {useNavigate}        from 'react-router-dom';


import { ExploreAction }    from '../../store/Context';
import GEN_Component        from "../ui/components/genComponent_1"
import STAR                 from "../ui/components/STAR"
import CardList             from "./cardList/property";

const Property = () => {

    const navigate = useNavigate();

    type propertyActionType = () => (e: React.MouseEvent) => void;
	const propertyAction:propertyActionType  = () => (e) => {
		navigate(`/property`)
	}
    const data ={
        title:"Featured Properties",
        content:"Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click 'View Details' for more information.",
        buttonText:"View All Properties",
        parentClass:"mb-[80px]",
        buttonClass:"bg-gray-1 border-gray-1"
    }

    const Container = styled.div`${({theme}) => ``}`;
    
    return <Container className='px-[16px] lg:px-[80px] xl:px-[160px] py-[75px] relative'>
        <STAR parentClass={"top-[50px] left-[60px]"} />
        <ExploreAction.Provider value={propertyAction()}>
            <GEN_Component {...data} />
        </ExploreAction.Provider>
        <CardList />
    </Container>
        
}
export default Property