import React, { useEffect, useState }   from "react";
import useFetch, {FetchData}            from '../../utility/customHook/API';

import CARD3                            from "../ui/CARD_STYLE_3"
import styled,{ useTheme }              from "styled-components"
import TEXT                             from "../ui/TEXT"
import IMG                              from "../ui/IMAGE"


type cardType = {
    data:{ 
        id:number;
        price:number;
        content:string;
        title:string;
        image:string;
        detail: {bed:number;bath:number;type:string}
    }[],
    counts:number
};

const CardList: React.FC = () => {

    const cardsPerPage=3
    const [currentPage, setCurrentPage] = useState(1);
    const [url, setUrl] = useState("realestate/home/property?page=1&len=3");
    const [sliceNumber, setSliceNumber] = useState(0);

    const { data:{data:cards,counts},success}: FetchData<cardType> = useFetch <cardType>(url,{data:[],counts:0});
    useEffect(()=>{
        setUrl(`realestate/home/property?page=${currentPage}&len=${cardsPerPage}`)
        setSliceNumber(Math.ceil(counts/cardsPerPage))

    },[currentPage])
    const PaginationContainer = styled.div`${({theme}) => `
        border-top: 1px solid var(--Grey-15, #262626);
        display: flex;
        padding-top: 20px;
        justify-content: space-between;
        align-items: flex-start;
        align-self: stretch;

        .pag-buttons {
            padding: 14px;
            border-radius: 69px;
            border: 1px solid var(--Grey-15, #262626);
            background: var(--Grey-10, #1A1A1A);
        }
    `}`;
    
    const paginFront = ()=> (currentPage < sliceNumber && setCurrentPage(currentPage+1)) 
    const paginBack  = ()=> (currentPage>1 && setCurrentPage(currentPage-1)) 
    
    return <>
        <div className="grid grid-flow-row gap-y-[50px]">
            <div className="grid grid-flow-row grid-cols-3 gap-x-[30px]">{
                cards.map((card, index) => <CARD3 {...card} />)
            }</div>
            <PaginationContainer className="">
                <TEXT className='' text={`${currentPage} of ${Math.ceil(counts/cardsPerPage)}`} fontSize={"18px"} />
                <div className="grid grid-flow-col gap-x-[10px]">
                    <button disabled={currentPage===1} className="pag-buttons" onClick={paginBack}  >
                        <IMG width={30} height={30} path="/image/general/arrow2.svg" activeBorder={false} eleClass={currentPage===1 ?"pag-button-disable":"pag-button-normal"} />
                    </button>
                    <button disabled={currentPage===sliceNumber} className="pag-buttons" onClick={(paginFront)}  >
                        <IMG width={30} height={30} path="/image/general/arrow1.svg" activeBorder={false} eleClass={currentPage===sliceNumber ?"pag-button-disable":"pag-button-normal"} />
                    </button>
                </div>
            </PaginationContainer>
        </div>
    </>
};

export default CardList;