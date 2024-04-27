import React        from 'react'
import styled       from "styled-components"


import TEXT         from "../elements/TEXT"
import IMG          from "../elements/IMAGE"


interface PaginationType {
    pagText:string;
    sliceState:string;
    paginFront:()=>boolean|void;
    paginBack:() =>boolean|void;
}
const Pagination: React.FC<PaginationType> = ({pagText,sliceState,paginBack,paginFront}) => {


    const PaginationContainer = styled.div`${({theme}) => ``}`;

    return <PaginationContainer className="flex justify-between pt-[20px] border-t border-gray-1">
        <TEXT className='' text={pagText} fontSize={"18px"} />
        <div className="grid grid-flow-col gap-x-[10px]">
            <button disabled={sliceState==="first"} className="p-[14px] border rounded-[69px] border-gray-1 bg-gray-1" onClick={paginBack}  >
                <IMG width={30} height={30} path="/image/general/arrow2.svg" activeBorder={false} eleClass={sliceState==="first" ?"pag-button-disable":"pag-button-normal"} />
            </button>
            <button disabled={sliceState==="last"} className="p-[14px] border rounded-[69px] border-gray-1 bg-gray-1" onClick={(paginFront)}  >
                <IMG width={30} height={30} path="/image/general/arrow1.svg" activeBorder={false} eleClass={sliceState==="last" ?"pag-button-disable":"pag-button-normal"} />
            </button>
        </div>
    </PaginationContainer>
}

export default Pagination