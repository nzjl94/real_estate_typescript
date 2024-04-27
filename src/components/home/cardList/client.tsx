import usePagination        from '../../../utility/customHook/usePagination';
import Pagination           from "../../ui/components/Pagination"
import CARD                 from "../../ui/cards/card5"

type cardType={ 
    star:number;
    content:string;
    title:string;
    image:string;
    name:string;
    location:string;
}

const CardList: React.FC = () => {

    const {cards,pagText,sliceState,cardsPerPage,paginBack,paginFront}=usePagination<cardType>("realestate/home/client",3)

    return <>
        <div className="grid grid-flow-row gap-y-[50px]">
            <div className={`grid grid-flow-row grid-cols-${cardsPerPage} gap-x-[30px]`}>{
                cards.map((card, index) => <CARD {...card} id={index} />)
            }</div>
            <Pagination pagText={pagText} sliceState={sliceState} paginBack={paginBack} paginFront={paginFront} />
        </div>
    </>
};

export default CardList;