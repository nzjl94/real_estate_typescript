import Select                       from "react-select"
import {Controller }                from 'react-hook-form';
import styled,{ useTheme }	        from "styled-components";
import {FieldErrors,UseFormRegister,FieldValues}    from 'react-hook-form';


import {TEXT}			            from "."

import {customReactSelectStyles}    from "../../../utility/form/formUtility"

interface REACT_SELECT_TYPE {
    register:UseFormRegister<FieldValues>;
    errors:FieldErrors;
    required:boolean;
    control:any;
    inputName:string;
    placeholder:string;
    parentClassName:string;
    options:{
        [key:string]:string|number
    };
}

const SELECT=({ inputName, control,options={}, placeholder="",parentClassName="",register,errors, required}:REACT_SELECT_TYPE) => {

  const theme = useTheme();

  return (
    <div className={`${parentClassName}`}>
        <Controller name={inputName} control={control}
            render={({ field,formState,fieldState }) => {
                return (
                    <Select 
                        styles={customReactSelectStyles(theme.colors.gray5,theme.colors.gray5)} 
                        {...field} 
                        options={
                            !Array.isArray(options) ? 
                            Object.keys(options).map(key=>({value:key,label:options[key]}))
                            :options.map(value=>({value,label:value}))
                        } 
                        placeholder={placeholder} //If default value selected then it does not appear
                    />
                )
            }}
        />
	</div>
)

}
export default SELECT