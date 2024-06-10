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

    return <div className='flex flex-col gap-y-[40px] md:gap-y-[50px] lg:gap-y-[60px] xl:gap-y-[80px]' id="service_value">
        <HEADER title={title} content={content} parentClass='grid-cols-4 md:grid-cols-5' />
        <div className="flex flex-col md:grid md:grid-cols-3 md:items-stretch gap-[20px] lg:gap-[30px]">{
            data.map((row,index) => data.length-1!==index? 
                <CARD1 index={index} {...row} />
                :<CARD3 index={index} parentClass="col-span-2" action={learnButton} {...row} />
        )}</div>
    </div>
}
export default Value