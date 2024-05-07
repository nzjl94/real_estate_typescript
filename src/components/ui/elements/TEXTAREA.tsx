import {MouseEvent}  from "react";

import ErrorMessage from "../../../utility/form/ErrorType"
import {onChangeAction} from "../../../utility/form/eventAction"

import { TEXTAREA_TYPE } from '../../../utility/types/typeApp';

const TextArea = (props:TEXTAREA_TYPE) => {

	const {inputName, inputLabel, register,errors,validation={},placeholder="",parentClassName=""}=props
	console.log(validation)
	return (
		<div className={`${parentClassName} px-3`}>
            <label className="block uppercase text-left mb-2" htmlFor={inputName}>{inputLabel}</label>
			<textarea
				placeholder={placeholder} rows={5}
				//onKeyDown={ commentOnSubmit}
                className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors[inputName] && "border border-red-500"} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}

				id={inputName}
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