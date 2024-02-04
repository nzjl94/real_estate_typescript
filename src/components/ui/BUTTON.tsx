import styled from "styled-components";
import React, { useContext } from 'react';

import { ExploreAction } from '../../store/Context';
import { Link } from 'react-router-dom';

const LinkElement = styled(Link)`${({theme}) => ``}`;

interface BUTTON_STYLE {
    onClick:() => any;
    className:() => string;
}
const ButtonElement = styled.button`${({theme}) => ``}`;

interface BUTTON_PROPS {
    [key: string]:string
}
export default ({type="link",text="",url="",className="px-[24px] py-[16px] rounded-[10px] border-[1px] border-gray-1 bg-gray-2"}:BUTTON_PROPS) => {
    if (type==="link"){
        return (<LinkElement to={url} className={className}>{text}</LinkElement>)
    }else{
        return (
            <button className={className} onClick={useContext(ExploreAction)} >{text} </button>
        ) 
    }
};