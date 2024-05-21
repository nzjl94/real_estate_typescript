import {MouseEvent}  		from "react";
import styled 				from "styled-components";

import ErrorMessage 		from "../../../utility/form/ErrorType"
import {onChangeAction} 	from "../../../utility/form/eventAction"
import { TEXTAREA_TYPE } 	from '../../../utility/types/typeApp';


const TEXT_AREA_COM = styled.textarea`${({theme}) =>`
    padding: 16px 20px;
	border-radius: 6px;
	background:${theme.colors.gray5};
`}`

const TextArea = (props:TEXTAREA_TYPE) => {

	const {inputName, inputLabel, register,errors,validation={},placeholder="",parentClassName=""}=props
	console.log(validation)
	return (
		<div className={`${parentClassName}`}>
            <label className="block text-left text-[16px] pb-[16px]" htmlFor={inputName}>{inputLabel}</label>
			<TEXT_AREA_COM
				placeholder={placeholder} rows={5}
                className={`w-full placeholder-current text-[14px] text-gray-3 border border-gray-1 focus:outline-none ${errors[inputName] && "border-red-500"} `}
				id={inputName}
                {...register(inputName,
					{ 
						...validation,
						onChange: (e:MouseEvent<HTMLInputElement>) => {onChangeAction(e,"textarea")},
						onBlur:   (e:MouseEvent<HTMLInputElement>) => {console.log("On Blur")}
					}
				)}
			/>
            <ErrorMessage inputName={inputName} errors={errors} />
		</div>
	)
}
export default TextArea