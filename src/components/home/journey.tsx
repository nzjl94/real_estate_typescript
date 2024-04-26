
import styled                           from "styled-components";
import { useSelector }                  from 'react-redux';

import { RootState } 		            from '../../store/Reducer';
import {getSingleTitle} 	            from '../../store/slice/title';
import useFetch, {FetchData}            from '../../utility/customHook/API';

import TEXT_IMAGE                       from "../ui/components/TEXT_IMAGE";
import CARD_LIST                        from "../ui/components/CARD_LIST"


import {TEXT_PARAGRAPH,TEXT_ICON_TYPE}  from '../../utility/typeApp';

const Journey = () => {

    const Container = styled.div`${({theme}) => ``}`;

    const title = useSelector((state: RootState) => getSingleTitle(state, "home_journey"));
    const { data:sections,success}: FetchData<TEXT_PARAGRAPH[]> = useFetch <TEXT_PARAGRAPH[]>('realestate/about/journey',[]);

    const { data:icon_cards,success:_}: FetchData<TEXT_ICON_TYPE[]> = useFetch <TEXT_ICON_TYPE[]>('realestate/page/icon-card',[]);

    return <Container className='p-[0px] pb-[75px] grid grid-flow-row gap-y-[10px] '>
        <TEXT_IMAGE title={title} sections={sections} img="/image/home/home_background.png" firstChildClass="pl-[162px]" showSection={true}/>
        <CARD_LIST data={icon_cards} />
    </Container>
        
}

export default Journey