import { useContext }   from 'react';

import styled           from "styled-components";
import { Link }         from 'react-router-dom';

import { ExploreAction }    from '../../../store/Context';
// import {OBJECT_1 as BUTTON_PROPS_TYPE}  from '../../utility/typeApp';
import TEXT from "./TEXT"

const LinkElement = styled(Link)`${({theme}) => ``}`;

interface BUTTON_PROPS_TYPE {
    text:string;
    textClass?:string;
    type?:string;
    url?:string;
    className?:string;
    localAction?:(e: React.MouseEvent,parameter: string) => void;
}

const Button:React.FC<BUTTON_PROPS_TYPE>= (props) => {
    const buttonAction= useContext(ExploreAction)

    const {text,type,url,className,localAction,textClass}={
        type:"link",url:"",textClass:"",
        className:"px-[24px] py-[16px] rounded-[10px] border-[1px] border-gray-1 bg-gray-2",
        ...props
    }
    if (type==="link"){
        return (<LinkElement to={url} className={className}>{text}</LinkElement>)
    }else if(type==="directButton"){
        return (
            <button className={className} onClick={(e)=>localAction!==undefined && localAction(e,"param")}>
                <TEXT text={text} responsive='button_set' fontWeight={500} className={textClass} />
            </button>
        )
    }else{
        return (
            <button className={className}  onClick={buttonAction} >
                <TEXT text={text} responsive='button_set' fontWeight={500} className={textClass} />
            </button>
        ) 
    }
};


export default Button;