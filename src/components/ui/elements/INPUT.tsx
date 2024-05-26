import styled 			from "styled-components";

import ErrorMessage 	from "../../../utility/form/ErrorType"
import { INPUT_TYPE } 	from '../../../utility/types/typeApp';
import {TEXT}			from "./"

// import { FieldValues}from 'react-hook-form';


const INPUT_COM = styled.input`${({theme}) =>`
    padding: 24px 20px;
	border-radius: 8px;
	background:${theme.colors.gray5};
`}`

const onChangeAction =(e:any)=>{}
const onBlurAction   =(e:any)=>{}

const Input = (props:INPUT_TYPE) => {
	const {inputName,inputLabel,inputType="text",placeholder="",parentClassName="",register,errors,validation={},defaultValue}=props
	return (
		<div className={`${parentClassName}`}>
			<label className="block text-left pb-[16px]">
				<TEXT text={inputLabel} responsive="set8" />
			</label>
			<INPUT_COM 
				className={`w-full placeholder-gray-500 text-[14px] text-white border border-gray-1 focus:outline-none ${errors[inputName] && "border-red-500"} `}
				type={inputType} 
				key={inputName}
				autoComplete="off"
				{...{placeholder,defaultValue}}
				{...register(inputName,
					{ 
						...validation,
						//onChange: (e:any) => onChangeAction(e),
						//onBlur:   (e:any) => onBlurAction(e),
					}
				)}
				
			/>
			<ErrorMessage inputName={inputName} errors={errors} />
		</div>
	)
}
export default Input