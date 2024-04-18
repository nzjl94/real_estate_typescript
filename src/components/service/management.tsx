import React from 'react'

import { RootState } 		from '../../store/Reducer';
import {getSingleTitle} 	from '../../store/slice/title';
import { useSelector }      from 'react-redux';

import HEADER               from "../ui/HEADER"



const Management = () => {
    const {title,content} = useSelector((state: RootState) => getSingleTitle(state, "service_management"));

    return <HEADER title={title} content={content}/>
}

export default Management