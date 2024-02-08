import React  from "react";
import styled from "styled-components";
import { FieldErrors,UseFormRegister, FieldValues } from 'react-hook-form';


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

const getErrorMessage = (fieldName: string, errs: Record<string, any>): string | undefined =>
    typeof errs?.[fieldName]?.message === 'string' ? errs?.[fieldName]?.message : undefined;


const Input = ({
		inputName,inputLabel,inputType="text",placeholder="",parentClassName="",
		register,errors,validation={},
	}:INPUT_TYPE) => {
	return (
		<div className={`${parentClassName} px-3`}>
			<label className="block uppercase mb-2">{inputLabel}</label>
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
			{
				errors[inputName] && 
				<p className="text-red-500 text-xs italic">{getErrorMessage(inputName, errors)}</p>
			}
		</div>
	)
}
export default Input