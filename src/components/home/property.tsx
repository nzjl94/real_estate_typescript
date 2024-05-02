import React from 'react'

import styled               from "styled-components";
import {useNavigate}        from 'react-router-dom';

import { ExploreAction }    from '../../store/Context';

import usePagination            from '../../utility/customHook/usePagination';
import {cardPropertyType}       from "../../utility/typeApp"

import {CARD2,CARD6} from "../ui/cards/"
import {STAR,STAR_3,PAGINATION}        from "../ui/components/"

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

    const {cards,pagText,sliceState,cardsPerPage,paginBack,paginFront}=usePagination<cardPropertyType>("realestate/home/property")

    const HEADER_WITH_STAR = STAR_3(CARD6);

    
    return <Container className='px-[16px] lg:px-[80px] xl:px-[160px] py-[75px] relative'>
        <ExploreAction.Provider value={propertyAction()}>
            <HEADER_WITH_STAR {...data}  starClass={"top-[50px] left-[60px]"}/>

        </ExploreAction.Provider>
        <div className="grid grid-flow-row gap-y-[50px]">
            <div className={`grid grid-flow-row grid-cols-${cardsPerPage} gap-x-[30px]`}>{
                cards.map((card, index) => <CARD2 {...card} />)
            }</div>
            <PAGINATION pagText={pagText} sliceState={sliceState} paginBack={paginBack} paginFront={paginFront} />
        </div>
    </Container>  
}
export default Property