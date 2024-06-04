import { useContext }       from 'react'
import styled               from "styled-components"
import { Link }             from 'react-router-dom'
import { ExploreAction }    from '../../../store/Context'
import {TEXT,IMAGE}         from "./"
import {BUTTON_TYPE}        from '../../../utility/types/typeApp'

const LinkElement = styled(Link)`${({theme}) => ``}`;



const Button:React.FC<BUTTON_TYPE>= (props) => {
    const buttonAction= useContext(ExploreAction)

    const {text,type,url,className,localAction,textClass}={
        type:"link",url:"",textClass:"",
        className:"py-[14px] px-[20px] lg:py-[16px] lg:px-[24px] rounded-[10px] border-[1px] border-gray-1 bg-gray-2",
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
    }else if(type==="imgButton"){
        return (
            <button className={className} onClick={(e)=>localAction!==undefined && localAction(e,"param")}>
				<IMAGE responsive={textClass} path={text} activeBorder={false} />
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