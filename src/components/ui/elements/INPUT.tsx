import styled 			from "styled-components";

import ErrorMessage 	from "../../../utility/form/ErrorType"
import { INPUT_TYPE } 	from '../../../utility/types/typeApp';
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
		<div className={`${parentClassName} px-3`}>
			<label className="block text-left text-[16px] pb-[16px]">{inputLabel}</label>
			<INPUT_COM 
				className={`w-full placeholder-current text-[14px] text-gray-3 border border-gray-1 focus:outline-none ${errors[inputName] && "border-red-500"} `}
				type={inputType} 
				autoComplete="off"
				{...{placeholder,defaultValue}}
				{...register(inputName,
					{ 
						...validation,
						onChange: (e:any) => onChangeAction(e),
						onBlur:   (e:any) => onBlurAction(e),
					}
				)}
				
			/>
			<ErrorMessage inputName={inputName} errors={errors} />
		</div>
	)
}
export default Input