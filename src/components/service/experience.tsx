import { RootState } 		from '../../store/Reducer';
import {getSingleTitle} 	from '../../store/slice/title';
import { useSelector }      from 'react-redux';

import HEADER               from "../ui/components/HEADER"
import CARD_LIST            from "../ui/components/CARD_LIST"
import styled               from "styled-components";

import {SERVICE_TYPE}       from "../../utility/types/typeApp"
import {BackgroundStyle1}   from "../../utility/types/styleApp"


const Component = styled(BackgroundStyle1)`${({theme}) => ``}`;

const Experience = ({data}:SERVICE_TYPE) => {    

    const {title,content} = useSelector((state: RootState) => getSingleTitle(state, "service_experience"));
    
    return <Component id="service_experience">
        <HEADER title={title} content={content} parentClass="py-[100px] pl-[80px]" backgroundStyle={BackgroundStyle1}/>
        <CARD_LIST data={data} />
    </Component>
}
export default Experience