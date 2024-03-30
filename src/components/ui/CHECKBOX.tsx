import { MouseEvent} from "react";

import ErrorMessage from "../../utility/ErrorType"
import {onChangeAction} from "../../utility/eventAction"
import {CHECKBOX_TYPE} from '../../utility/typeApp';

export default ({ inputName, inputLabel,options, register,errors,validation={},parentClassName="",listType="single"}:CHECKBOX_TYPE) => {
    
    const checkBoxItem =(name:string,value:string,label:string,itemClass:string="border-r",id:string="")=>(
        <li className={`w-full border-white-200 ${itemClass}`}>
            <div className="flex justify-center">
                <input 
                    name={name} //if they have different name then they will be different variables
                    id={id.length>0?id:name} type="checkbox" value={value} 
                    className="rounded text-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 bg-gray-600 border-gray-500"
                    {...register(inputName,{ ...validation})}
                />
                <label className="py-3 ms-2">{label}</label>
            </div>
        </li>
    );
    let temContent;
    if (listType==="single" && !Array.isArray(options)){
        temContent=(
            <label className="block py-3 text-left" >
				<input 
					id={inputName} name={inputName} type="checkbox" value={options.id}
                    className="rounded  text-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 bg-gray-600 border-gray-500"
                    {...register(inputName,{ 
                        ...validation,
						onChange: (e:MouseEvent<HTMLInputElement>) => {onChangeAction(e,"checkbox")}
                    })}
				/> {` ${options.value}`}
			</label>
        )
    }else{
        temContent=(
            <ul className={`${listType==="vertical"?"w-48":"flex w-full"} border rounded-lg border-white-900`}>
                {
                    Array.isArray(options)  &&   
                    options.map((value,index)=>checkBoxItem(inputName,value.toLowerCase(),value,index===options.length-1?"":"border-r"))
                }
                {!Array.isArray(options)  &&  Object.keys(options).map(key=>checkBoxItem(inputName,key,options[key]))}
            </ul>
        )
    }
	return (
		<div className={`${parentClassName} px-3`}>
            <label className="block uppercase mb-2 text-left">{inputLabel}</label>
            {temContent}
            <ErrorMessage inputName={inputName} errors={errors} />
		</div>
	)
}