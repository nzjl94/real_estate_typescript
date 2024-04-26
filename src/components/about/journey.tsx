import React from 'react'
import TEXT_IMAGE from "../ui/components/TEXT_IMAGE";

import { useSelector }          from 'react-redux';
import { RootState } 		    from '../../store/Reducer';
import {getSingleTitle} 	    from '../../store/slice/title';


import {TEXT_PARAGRAPH}             from '../../utility/typeApp';
import useFetch, {FetchData}    from '../../utility/customHook/API';


// This approch it work only if the files inside [src] but does not work when they inside [public]
import profilePic             from '../../image/about/journey/title.png'

const Journey = () => {

    const title = useSelector((state: RootState) => getSingleTitle(state, "service_experience"));
    const { data:sections,success}: FetchData<TEXT_PARAGRAPH[]> = useFetch <TEXT_PARAGRAPH[]>('realestate/about/journey',[]);

    return (
        <TEXT_IMAGE title={title} sections={sections} img={profilePic} parentClass='mt-[100px]' />
    )
}

export default Journey