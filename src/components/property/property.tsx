import usePagination            from '../../utility/customHook/usePagination';
import {cardPropertyType}       from "../../utility/types/typeApp"
import {CARD2}                  from "../ui/cards/"
import {PAGINATION}             from "../ui/components/"

import {
	getSingleTitle,useSelector,RootState,HEADER,STAR
}   from "./header"

const Property = () => {
    const {key,title,content} = useSelector((state: RootState) => getSingleTitle(state, "property_property"));
    const HEADER_WITH_STAR = STAR(HEADER);
    const {cards,pagText,sliceState,cardsPerPage,paginBack,paginFront}=usePagination<cardPropertyType>("home/property")
    
    return <div className='flex flex-col cp-gap-y-2 px-[16px] lg:px-[80px] xl:px-[160px] py-[75px] relative'>
        
        <HEADER_WITH_STAR title={title} content={content} starClass={"-top-[45px] -left-[30px]"} />

        <div className="grid grid-flow-row gap-y-[50px]">
            <div className={`grid grid-flow-row grid-cols-${cardsPerPage} gap-x-[30px]`}>{
                cards.map((card, index) => <CARD2 {...card} />)
            }</div>
            <PAGINATION pagText={pagText} sliceState={sliceState} paginBack={paginBack} paginFront={paginFront} />
        </div>
    </div>  
}
export default Property