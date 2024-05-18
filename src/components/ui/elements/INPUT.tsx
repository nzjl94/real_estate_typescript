import styled 			from "styled-components";

import ErrorMessage 	from "../../../utility/form/ErrorType"
import { INPUT_TYPE } 	from '../../../utility/types/typeApp';
// import { FieldValues}from 'react-hook-form';


const INPUT_COM = styled.input`${({theme}) =>`
    padding: 24px 20px;
	border-radius: 8px;
	background:${theme.colors.gray5};
`}`

const onChangeAction =(e:any)=>{

}

const onBlurAction =(e:any)=>{

}


const Input = (props:INPUT_TYPE) => {
	const {inputName,inputLabel,inputType="text",placeholder="",parentClassName="",register,errors,validation={},defaultValue}=props
	return (
		<div className={`${parentClassName} px-3`}>
			<label className="block uppercase text-left mb-2">{inputLabel}</label>

			{/* <input className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors[inputName] && "border border-red-500"} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`} */}

			<INPUT_COM 

				className={`w-full placeholder-current text-gray-3 ${errors[inputName] && "border border-red-500"} `}

				type={inputType} 
				{...{placeholder,defaultValue}}
				{...register(inputName,
					{ 
						...validation,
						onChange: (e:any) => onChangeAction(e),
						onBlur: (e:any) => onBlurAction(e),
					}
				)}
				
			/>
			<ErrorMessage inputName={inputName} errors={errors} />
		</div>
	)
}
export default Input