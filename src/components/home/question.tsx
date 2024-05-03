import React from 'react'

import styled    from "styled-components";
import {useNavigate}        from 'react-router-dom';
import usePagination        from '../../utility/customHook/usePagination';

import {cardQuestionType}   from "../../utility/typeApp"

import { ExploreAction }    from '../../store/Context';

import {STAR,PAGINATION}    from "../ui/components/"
import {CARD4,CARD6}        from "../ui/cards/"



const Question = () => {

    const navigate = useNavigate();

    type propertyActionType = () => (e: React.MouseEvent) => void;
	const propertyAction:propertyActionType  = () => (e) => {
		navigate(`/property`)
	}

    const {cards,pagText,sliceState,cardsPerPage,paginBack,paginFront}=usePagination<cardQuestionType>("realestate/home/question")

    const data ={
        title:"Frequently Asked Questions",
        content:"Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.",
        buttonText:"View All FAQ’s",
        parentClass:"mb-[80px]",
        buttonClass:"bg-gray-1 border-gray-1"
    }
    const Container = styled.div`${({theme}) => ``}`;
    const HEADER_WITH_STAR = STAR(CARD6);


    return <Container className='flex flex-col gap-y-[40px] md:gap-y-[60px] lg:gap-y-[80px] px-[16px] lg:px-[80px] xl:px-[160px] py-[75px]'>
        <ExploreAction.Provider value={propertyAction()}>
            <HEADER_WITH_STAR {...data}  starClass={"-top-[45px] -left-[30px]"}/>
        </ExploreAction.Provider>
        <div className="grid grid-flow-row gap-y-[50px]">
            <div className={`grid grid-flow-col grid-cols-${cardsPerPage} gap-x-[30px]`}>{
                cards.map((card, index) => <CARD4 {...card}  />)
            }</div>
            <PAGINATION pagText={pagText} sliceState={sliceState} paginBack={paginBack} paginFront={paginFront} />
        </div>

    </Container>
        
}
export default Question