import React,{MouseEvent}  from "react";
import styled from "styled-components";


import {FieldErrors } from 'react-hook-form';
import {onChangeAction} from "../../utility/eventAction"
import ErrorMessage from "../../utility/ErrorType"



interface SELECT_TYPE {
    inputName:string;
    inputLabel:string;
    parentClassName:string;
    placeholder:string;
    validation:{};
    register:any;
    errors:FieldErrors;
    options:string[] | {[key: string]:string};
}

const Select = (
    { inputName, inputLabel, register,errors,options, validation={},placeholder="",parentClassName=""}:SELECT_TYPE
) =>{
	return (
		<div className={`${parentClassName} px-3`}>
			<label className="block uppercase mb-2 text-left" htmlFor="grid-state">{inputLabel}</label>	
			<select 
				className="h-[48px] text-black rounded-lg block w-full py-[12px] px-4"
				name={inputName}
				{...register(inputName,{ 
					...validation,
					onChange: (e:MouseEvent<HTMLInputElement>) => {onChangeAction(e,"select")},
					// onBlur: (e) => {console.log("On Blur")},
				})} 
			>
				<option value="" disabled selected>{placeholder}</option>
				{ Array.isArray(options)  &&  options.map((value,index)=><option key={index} value={value.toLowerCase()}>{value}</option>)}
				{!Array.isArray(options)  &&  Object.keys(options).map((key,index)=><option key={index} value={key}>{options[key]}</option>)}
			</select>
            <ErrorMessage inputName={inputName} errors={errors} />
		</div>
	)
} 

export default Select