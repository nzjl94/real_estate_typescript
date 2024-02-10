import React  from "react";
import styled from "styled-components";
import {FieldErrors } from 'react-hook-form';

import {getErrorMessage} from "../../utility/ErrorType"




interface TEXTAREA_TYPE {
    inputName:string;
    inputLabel:string;
    parentClassName:string;
    placeholder:string;
    register:any;
    errors:FieldErrors;
    validation:{[key:string]:string}
}

const TextArea = (
    {inputName, inputLabel, register,errors,validation={},placeholder="",parentClassName=""}:TEXTAREA_TYPE
) => {
	return (
		<div className={`${parentClassName} px-3`}>
            <label className="block uppercase text-left mb-2" htmlFor={inputName}>{inputLabel}</label>
			<textarea
				type="text" placeholder={placeholder} rows="5" 
				//onKeyDown={ commentOnSubmit}
                className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors[inputName] && "border border-red-500"} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}

				name={inputName} id={inputName}
                {...register(inputName,
					{ 
						...validation,
						// onChange: (e) => {
						// 	// console.log("On change")
						// },
						// onBlur: (e) => {
						// 	// console.log("On Blur")
						// },
					}
				)}
			/>
            {
				errors[inputName] && 
				<p className="text-red-500 text-xs italic text-left">{getErrorMessage(inputName, errors)}</p>
			}
		</div>
	)
}

export default TextArea