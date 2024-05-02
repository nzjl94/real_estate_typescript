import styled                   from "styled-components";

import usePagination            from '../../utility/customHook/usePagination';
import {cardPropertyType}       from "../../utility/typeApp"

import {CARD2}                  from "../ui/cards/"
import {STAR,PAGINATION,HEADER} from "../ui/components/"

const Property = () => {
    
    const data ={
        title:"Discover a World of Possibilities",
        content:"Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home",
    }
    const Container = styled.div`${({theme}) => ``}`;

    const HEADER_WITH_STAR = STAR(HEADER);


    const {cards,pagText,sliceState,cardsPerPage,paginBack,paginFront}=usePagination<cardPropertyType>("realestate/home/property")
    
    return <Container className='px-[16px] lg:px-[80px] xl:px-[160px] py-[75px] relative'>

        <HEADER_WITH_STAR title={data.title} content={data.content} starClass={"top-[50px] left-[60px]"} />

        <div className="grid grid-flow-row gap-y-[50px]">
            <div className={`grid grid-flow-row grid-cols-${cardsPerPage} gap-x-[30px]`}>{
                cards.map((card, index) => <CARD2 {...card} />)
            }</div>
            <PAGINATION pagText={pagText} sliceState={sliceState} paginBack={paginBack} paginFront={paginFront} />
        </div>
    </Container>  
}
export default Property