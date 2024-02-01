"use client";

import React  from "react";
import styled from "styled-components";

const TextArea = ({ 
	inputName, inputLabel, register,errors,validation={},placeholder="",parentClassName=""
}) => {
	return (
		<div className={`${parentClassName} px-3`}>
            <label className="block uppercase mb-2" htmlFor={inputName}>{inputLabel}</label>
			<textarea
				type="text" placeholder={placeholder} rows="5" 
				//onKeyDown={ commentOnSubmit}
                className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors[inputName] && "border border-red-500"} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}

				name={inputName} id={inputName}
                {...register(inputName,
					{ 
						...validation,
						onChange: (e) => {
							// console.log("On change")
						},
						onBlur: (e) => {
							// console.log("On Blur")
						},
					}
				)}
			/>
			{errors[inputName] && <p className="text-red-500 text-xs italic">{errors[inputName]?.message}</p>}
		</div>
	)
}

export default TextArea