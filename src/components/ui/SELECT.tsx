import React  from "react";
import styled from "styled-components";
import {FieldErrors } from 'react-hook-form';




interface SELECT_TYPE {
    inputName:string;
    inputLabel:string;
    parentClassName:string;
    placeholder:string;
    required:boolean;
    register:any;
    errors:FieldErrors;
    options:string[] | {[key: string]:string};
}

const Select = (
    { inputName, inputLabel, register,errors,options, required,placeholder="",parentClassName=""}:SELECT_TYPE
) =>{
	return (
		<div className={`${parentClassName} px-3`}>
			<label className="block uppercase mb-2" htmlFor="grid-state">{inputLabel}</label>	
			<select 
				className="h-[48px] text-black rounded-lg block w-full py-[12px] px-4"
				name={inputName}
				{...register(inputName,{ 
					required: true,
					// onChange: (e) => {
					// 	console.log(errors)
					// },
					// onBlur: (e) => {
					// 	console.log("On Blur")
					// },
				})} 
			>
				<option value="" disabled selected>{placeholder}</option>
				{ Array.isArray(options)  &&  options.map((value,index)=><option key={index} value={value.toLowerCase()}>{value}</option>)}
				{!Array.isArray(options)  &&  Object.keys(options).map((key,index)=><option key={index} value={key}>{options[key]}</option>)}
			</select>
			{
				errors[inputName] && <p className="text-red-500 text-xs italic text-left">Please fill out {inputLabel} field.</p>
			}
		</div>
	)
} 

export default Select