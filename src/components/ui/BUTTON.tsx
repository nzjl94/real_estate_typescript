import { useContext }   from 'react';
import styled           from "styled-components";
import { Link }         from 'react-router-dom';

import { ExploreAction }    from '../../store/Context';
import {OBJECT_1 as BUTTON_PROPS_TYPE}  from '../../utility/typeApp';
import TEXT from "./TEXT"

const LinkElement = styled(Link)`${({theme}) => ``}`;

export default ({type="link",text="",url="",className="px-[24px] py-[16px] rounded-[10px] border-[1px] border-gray-1 bg-gray-2"}:BUTTON_PROPS_TYPE) => {
    if (type==="link"){
        return (<LinkElement to={url} className={className}>{text}</LinkElement>)
    }else{
        return (
            <button className={className} onClick={useContext(ExploreAction)} >
                <TEXT text={text} fontSize='18px' fontWeight={500} />
            </button>
        ) 
    }
};