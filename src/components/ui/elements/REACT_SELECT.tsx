import Select                     from "react-select"
import {Controller }              from 'react-hook-form';
import styled,{ useTheme }	      from "styled-components";

import {REACT_SELECT_TYPE}        from "../../../utility/types/typeApp"
import {customReactSelectStyles}  from "../../../utility/form/formUtility"


const SELECT=({ inputName, inputLabel, control,options={}, placeholder="",parentClassName="",register,errors, required}:REACT_SELECT_TYPE) => {

  const theme = useTheme();

  return (
    <div className={`${parentClassName}`}>
	    <label className="block text-left text-[16px] pb-[16px]" htmlFor={inputName}>{inputLabel}</label>
        <Controller
            name={inputName}
            control={control}
            //defaultValue={options.filter(c => c.value=="vanilla")}
            render={({ field,formState,fieldState }) => {
                return (
                    <Select 
                        styles={customReactSelectStyles(theme.colors.gray5,theme.colors.gray5)} 
                        {...field} 
                        options={Object.keys(options).map(key=>({value:key,label:options[key]}))} 
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