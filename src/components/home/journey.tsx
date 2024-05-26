
import styled                           from "styled-components";
import { useSelector }                  from 'react-redux';

import { RootState } 		            from '../../store/Reducer';
import {getSingleTitle} 	            from '../../store/slice/title';
import useFetch, {FetchData}            from '../../utility/customHook/useGetAPI';

import {TEXT_IMAGE,CARD_LIST}           from "../ui/components/";


import {TEXT_PARAGRAPH,TEXT_ICON_TYPE}  from '../../utility/types/typeApp';

const Journey = () => {

    const Container = styled.div`${({theme}) => ``}`;

    const title = useSelector((state: RootState) => getSingleTitle(state, "home_journey") || "");
    const { data:sections,success}: FetchData<TEXT_PARAGRAPH[]> = useFetch <TEXT_PARAGRAPH[]>('about/journey',[]);

    const { data:icon_cards,success:_}: FetchData<TEXT_ICON_TYPE[]> = useFetch <TEXT_ICON_TYPE[]>('page/icon-card',[]);

    return <Container className='p-[0px] pb-[75px] grid grid-flow-row gap-y-[10px] '>
        <TEXT_IMAGE title={title} sections={sections} img="/image/home/home_background.png" firstChildClass="md:pl-[80px] lg:pl-[162px]" showSection={true}/>
        <CARD_LIST data={icon_cards} />
    </Container>
        
}

export default Journey