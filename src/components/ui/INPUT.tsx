import React  from "react";
import styled from "styled-components";
import { FieldErrors,UseFormRegister, FieldValues } from 'react-hook-form';

import ErrorMessage from "../../utility/ErrorType"


interface INPUT_TYPE {
    inputName:string;
    inputLabel:string;
    inputType?:string;
    register:any;
    // register:UseFormRegister<FieldValues>;
    errors:FieldErrors;
    validation?:any;
    parentClassName?:string;
    placeholder?:string;
}



const Input = ({
		inputName,inputLabel,inputType="text",placeholder="",parentClassName="",
		register,errors,validation={},
	}:INPUT_TYPE) => {
	return (
		<div className={`${parentClassName} px-3`}>
			<label className="block uppercase text-left mb-2">{inputLabel}</label>
			<input 
				className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors[inputName] && "border border-red-500"} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
				type={inputType} placeholder={placeholder} 
				{...register(inputName,
					{ 
						...validation,
						onChange: (e:any) => {
							// console.log("On change")
						},
						onBlur: (e:any) => {
							// console.log("On Blur")
						},
					}
				)}
				
			/>
			<ErrorMessage inputName={inputName} errors={errors} />
		</div>
	)
}
export default Input