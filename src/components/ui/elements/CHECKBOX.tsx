import { MouseEvent} from "react";

import ErrorMessage from "../../../utility/form/ErrorType"
import {onChangeAction} from "../../../utility/form/eventAction"
import {CHECKBOX_TYPE} from '../../../utility/types/typeApp';

const checkBoxItem =(name:string,value:string,label:string,register:any,validation:any,itemClass:string="border-r",id:string="")=>(
    <li className={`w-full border-white-200 ${itemClass}`}>
        <div className="flex justify-center">
            <input 
                name={name} //if they have different name then they will be different variables
                id={id.length>0?id:name} type="checkbox" value={value} 
                className="rounded text-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 bg-gray-600 border-gray-500"
                {...register(name,{ ...validation})}
            />
            <label className="py-3 ms-2">{label}</label>
        </div>
    </li>
);

const CHECKBOX= (props:CHECKBOX_TYPE) => {

    const { inputName, inputLabel,options, register,errors,validation={},parentClassName="",listType="single",show_label=true}=props
    
  
    let temContent;
    if (listType==="single" && !Array.isArray(options)){
        temContent=(
            <label className={`flex gap-x-[6px] py-3 bg-grey-1 text-left text-[16px] text-gray-4`} >
				<input 
					id={inputName} 
                    type="checkbox"                       
                    className={`w-[24px] h-[24px] cp-color-2 text-purple-1 rounded-[4px] focus:ring-0 focus:ring-offset-0`}
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
                    Array.isArray(options)  &&  options.map((value,index)=>checkBoxItem(inputName,value.toLowerCase(),value,register,validation,index===options.length-1?"":"border-r"))
                }
                {
                    !Array.isArray(options)  &&  Object.keys(options).map(key=>checkBoxItem(inputName,key,options[key],register,validation))
                }
            </ul>
        )
    }
	return (
		<div className={`${parentClassName} px-3`}>
            {show_label===true && <label className="block uppercase mb-2 text-left">{inputLabel}</label>}
            {temContent}
            <ErrorMessage inputName={inputName} errors={errors} />
		</div>
	)
}

export default CHECKBOX