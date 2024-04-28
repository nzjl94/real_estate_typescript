import usePagination        from '../../../utility/customHook/usePagination';
import Pagination           from "../../ui/components/Pagination"
import CARD                 from "../../ui/cards/card4"


type cardType = {
    id:number;
    content:string;
    title:string;
};

const CardList: React.FC = () => {

    const {cards,pagText,sliceState,cardsPerPage,paginBack,paginFront}=usePagination<cardType>("realestate/home/question")

    return <div className="grid grid-flow-row gap-y-[50px]">
        <div className={`grid grid-flow-col grid-cols-${cardsPerPage} gap-x-[30px]`}>{
            cards.map((card, index) => <CARD {...card}  />)
        }</div>
        <Pagination pagText={pagText} sliceState={sliceState} paginBack={paginBack} paginFront={paginFront} />
    </div>
};

export default CardList;