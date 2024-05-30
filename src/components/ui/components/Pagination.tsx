import React                from 'react'
import {TEXT,IMAGE}         from "../elements"
import {PaginationType}     from "../../../utility/types/typeApp"

const Pagination: React.FC<PaginationType> = ({pagText,sliceState,paginBack,paginFront}) => {
    return <div className="flex justify-between pt-[20px] border-t border-gray-1">
        <TEXT className='' text={pagText} fontSize={"18px"} />
        <div className="grid grid-flow-col gap-x-[10px]">
            <button disabled={sliceState==="first"} className="p-[14px] border rounded-[69px] border-gray-1 bg-gray-1" onClick={paginBack}  >
                <IMAGE width={30} height={30} path="/image/general/arrow2.svg" activeBorder={false} eleClass={sliceState==="first" ?"pag-button-disable":"pag-button-normal"} />
            </button>
            <button disabled={sliceState==="last"} className="p-[14px] border rounded-[69px] border-gray-1 bg-gray-1" onClick={(paginFront)}  >
                <IMAGE width={30} height={30} path="/image/general/arrow1.svg" activeBorder={false} eleClass={sliceState==="last" ?"pag-button-disable":"pag-button-normal"} />
            </button>
        </div>
    </div>
}
export default Pagination