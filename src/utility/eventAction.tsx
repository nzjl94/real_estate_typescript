import {MouseEvent}  from "react";
import {FieldErrors } from 'react-hook-form';

type onChangeAction= (e:MouseEvent<HTMLInputElement>,type:string)=>void
export const onChangeAction:onChangeAction =(e,type)=>{
    if(type==="textarea"){
        console.log("Text Area have been changed")
    }else if (type==="checkbox"){
        console.log("Check Box have been changed")
    }else if (type==="select"){
        console.log("Select have been changed")
    }
}
type onErrorAction= (error:FieldErrors,type:string)=>void
export const onErrorAction:onErrorAction =(error,type)=>{
    if(type==="connect"){
        console.log("Errors from Connect form",error)
    }
}