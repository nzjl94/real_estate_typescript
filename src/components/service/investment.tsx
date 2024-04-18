import React from 'react'

import { RootState } 		from '../../store/Reducer';
import {getSingleTitle} 	from '../../store/slice/title';
import { useSelector }      from 'react-redux';

import HEADER               from "../ui/HEADER"

const Investment = () => {

    const {title,content} = useSelector((state: RootState) => getSingleTitle(state, "service_investment"));

    return <HEADER title={title} content={content}/>
}

export default Investment