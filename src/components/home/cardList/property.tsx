import CARD                             from "../../ui/cards/card2"
import usePagination                    from '../../../utility/customHook/usePagination';
import Pagination                       from "../../ui/components/Pagination"


type cardType = {
    id:number;
    price:number;
    content:string;
    title:string;
    image:string;
    detail: {bed:number;bath:number;type:string}
};

const CardList: React.FC = () => {
    const {cards,pagText,sliceState,cardsPerPage,paginBack,paginFront}=usePagination<cardType>("realestate/home/property",3)
    return <div className="grid grid-flow-row gap-y-[50px]">
        <div className={`grid grid-flow-row grid-cols-${cardsPerPage} gap-x-[30px]`}>{
            cards.map((card, index) => <CARD {...card} />)
        }</div>
        <Pagination pagText={pagText} sliceState={sliceState} paginBack={paginBack} paginFront={paginFront} />
    </div>
};

export default CardList;