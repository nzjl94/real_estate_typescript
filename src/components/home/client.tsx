import React from 'react'

import styled               from "styled-components";
import {useNavigate}        from 'react-router-dom';

import {CARD5,CARD6}        from "../ui/cards/"
import { ExploreAction }    from '../../store/Context';

import {PAGINATION}    from "../ui/components"

import usePagination        from '../../utility/customHook/usePagination';
import {cardClientType}     from "../../utility/typeApp"


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

    const {cards,pagText,sliceState,cardsPerPage,paginBack,paginFront}=usePagination<cardClientType>("realestate/home/client")
    const Container = styled.div`${({theme}) => ``}`;
    
    return <Container className='px-[16px] lg:px-[80px] xl:px-[160px]   py-[75px] relative'>
        <ExploreAction.Provider value={propertyAction()}>
            <CARD6 {...data} />
        </ExploreAction.Provider>
        <div className="grid grid-flow-row gap-y-[50px]">
            <div className={`grid grid-flow-row grid-cols-${cardsPerPage} gap-x-[30px]`}>{
                cards.map((card, index) => <CARD5 {...card} id={index} />)
            }</div>
            <PAGINATION pagText={pagText} sliceState={sliceState} paginBack={paginBack} paginFront={paginFront} />
        </div>
    </Container>
        
}
export default Client