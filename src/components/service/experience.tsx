import { RootState } 		from '../../store/Reducer';
import {getSingleTitle} 	from '../../store/slice/title';
import { useSelector }      from 'react-redux';
import {HEADER,CARD_LIST}   from "../ui/components"
import styled               from "styled-components";
import {SERVICE_TYPE}       from "../../utility/types/typeApp"
import {BackgroundStyle1}   from "../../utility/types/styleApp"


const Component = styled(BackgroundStyle1)`${({theme}) => ``}`;

const Experience = ({data}:SERVICE_TYPE) => {    
    const {title,content} = useSelector((state: RootState) => getSingleTitle(state, "service_experience"));
    return <Component id="service_experience">
        <HEADER title={title} content={content} parentClass="flex flex-col gap-y-[10px] lg:gap-y-[14px] px-[16px] lg:px-[80px] xl:px-[160px] py-[50px] md:py-[75px] lg:py-[100px] xl:pt-[150px] xl:pb-[100px]" backgroundStyle={BackgroundStyle1}/>
        <CARD_LIST data={data} />
    </Component>
}
export default Experience