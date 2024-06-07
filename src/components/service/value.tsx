import {MouseEvent}         from 'react'
import { RootState } 		from '../../store/Reducer';
import {getSingleTitle} 	from '../../store/slice/title';
import { useSelector }      from 'react-redux';
import HEADER               from "../ui/components/HEADER"
import {CARD1,CARD3}        from "../ui/cards"
import {SERVICE_TYPE}       from "../../utility/types/typeApp"

const learnButton = (event:MouseEvent<HTMLButtonElement>)=>{
    console.log("Hello You")
}
const Value = ({data}:SERVICE_TYPE) => {
    
    const {title,content} = useSelector((state: RootState) => getSingleTitle(state, "service_value"));
    return <div className='px-[162px] pt-[120px]' id="service_value">
        <HEADER title={title} content={content} />
        <div className="mt-[60px] grid grid-flow-row grid-cols-3  gap-[30px] items-stretch">{
            data.map((row,index) => data.length-1!==index? 
                <CARD1 index={index} {...row} />
                :<CARD3 index={index} parentClass="col-span-2" action={learnButton} {...row} />
        )}</div>
    </div>
}
export default Value