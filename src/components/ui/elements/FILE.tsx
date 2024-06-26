import {FILE_TYPE} 	from '../../../utility/types/typeApp';
import ErrorMessage from "../../../utility/form/ErrorType"

export default ({ inputName, inputLabel, register,errors, validation,parentClassName=""}:FILE_TYPE) =>{
	return (
		<div className={`${parentClassName} px-3`}>
			<label className="block uppercase mb-2 text-left" htmlFor={inputName}>{inputLabel}</label>	
			<input 
				id={inputName} type="file"
				className="
					block w-full text-lg border rounded-lg cursor-pointer  
					text-gray-900 focus:outline-none bg-white border-gray-900
   					file:mr-2 file:py-2 file:text-gray-900 file:px-5 file:border-[1px] file:text-lg 
   					hover:file:cursor-pointer  hover:file:bg-blue-50 hover:file:text-blue-700
				"  
				{...register(inputName,{ ...validation})} 
			/>
            <ErrorMessage inputName={inputName} errors={errors} />
		</div>
	)
} 