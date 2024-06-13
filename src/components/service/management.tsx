import {MouseEvent}         from 'react'

import { RootState } 		from '../../store/Reducer';
import {getSingleTitle} 	from '../../store/slice/title';
import { useSelector }      from 'react-redux';
import HEADER               from "../ui/components/HEADER"
import {CARD1,CARD3}        from "../ui/cards"
import {SERVICE_TYPE}       from "../../utility/types/typeApp"

const Management = ({data}:SERVICE_TYPE) => {

    const learnButton = (event:MouseEvent<HTMLButtonElement>)=>{
        console.log("Hiiiiii You")
    }
    const {title,content} = useSelector((state: RootState) => getSingleTitle(state, "service_management"));


    return <div className='flex flex-col cp-gap-y-2' id="service_management">
        <HEADER title={title} content={content} parentClass='grid-cols-4 md:grid-cols-5' />

        <div className="flex flex-col md:grid md:grid-cols-3 md:items-stretch gap-[20px] lg:gap-[30px]">{
            data.map((row,index) => data.length-1!==index? 
                <CARD1 index={index} {...row} />
                :<CARD3 index={index} parentClass="col-span-2" action={learnButton} {...row} />
        )}</div>
    </div>
}
export default Management