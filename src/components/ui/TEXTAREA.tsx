import React,{MouseEvent}  from "react";
import styled from "styled-components";
import {FieldErrors } from 'react-hook-form';

import ErrorMessage from "../../utility/ErrorType"
import {onChangeAction} from "../../utility/eventAction"


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
						onChange: (e:MouseEvent<HTMLInputElement>) => {onChangeAction(e,"textarea")},
						onBlur: (e:MouseEvent<HTMLInputElement>) => {console.log("On Blur")}
					}
				)}
			/>
            <ErrorMessage inputName={inputName} errors={errors} />
		</div>
	)
}

export default TextArea