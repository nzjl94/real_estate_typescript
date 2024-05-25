import Select                       from "react-select"
import {Controller }                from 'react-hook-form';
import styled,{ useTheme }	        from "styled-components";

import {TEXT}			            from "./"
import {REACT_SELECT_TYPE}          from "../../../utility/types/typeApp"
import {customReactSelectStyles}    from "../../../utility/form/formUtility"



const SELECT=({ inputName, inputLabel, control,options={}, placeholder="",parentClassName="",register,errors, required}:REACT_SELECT_TYPE) => {

  const theme = useTheme();

  return (
    <div className={`${parentClassName}`}>
	    <label className="block text-left pb-[16px]" htmlFor={inputName}>
			<TEXT text={inputLabel} responsive="set8" />
        </label>
        <Controller
            name={inputName}
            control={control}
            //defaultValue={options.filter(c => c.value=="vanilla")}
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

                        
                        
                        //defaultValue={options[2]} 
                        placeholder={placeholder} //If default value selected then it does not appear
                    />
                )
            }}
        />
	</div>
)

}
export default SELECT