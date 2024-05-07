import {StylesConfig}                             from "react-select"
import {Control,FieldErrors,UseFormRegister}    	from 'react-hook-form';

import {SELECT_OPTION_TYPE}                       from "../types/typeApp"
import FormValidation			    				            from './formValidation'


export const customReactSelectStyles= (background:string,borderColor:string)=>{
  const react_select:StylesConfig<SELECT_OPTION_TYPE, false>= {
      control: (baseStyles, state) => {
        return {
          ...baseStyles,
          borderWidth:"1px",
          boxShadow: state.isFocused ? "#0ff" : "#0f0",
          padding: '22px 20px',
          background,
          borderColor,
          "&:hover": {
            borderColor
          }
        }
      },
      option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return {
          ...styles,
          background,
          "&:hover": {
            background:"#999"
          },
          color: '#FFF',
        };
      },
      valueContainer: (provided, state) => ({
        ...provided,
        padding: '0px 0px',
      }),
      input: (provided, state) => ({
        ...provided,
        margin: '0px',
        padding: '0px',
      }),
      indicatorSeparator: state => ({
        display: 'none',
      }),
      indicatorsContainer: (provided, state) => ({
        ...provided,
      }),
      dropdownIndicator: base => ({
        ...base
      }),
      singleValue: base => ({
        ...base
      }),
      menu: base => ({
        ...base,
        background,
      }),
      menuList: base => ({
        ...base,
        color:"#fff",
      })
  };

  return react_select
}

export class GENERATE_ELEMENT {
  
  control:Control<{}, any, {}>;
  errors:FieldErrors;
  register:UseFormRegister<{}>;
  required:boolean;

  constructor(control: Control<{}, any, {}>, errors: FieldErrors, register: UseFormRegister<{}>,required:boolean) {
      this.control  = control;
      this.errors   = errors;
      this.register = register;
      this.required = required;
  }

  SELECT (inputName:string,inputLabel:string,pClass:string,placeholder:string,options:{[key:string]:string|number}){
    return {
      inputName,
      inputLabel ,
      placeholder,
      register:this.register,
      options,
      control:this.control ,
      errors:this.errors ,
      required:this.required,
      parentClassName:pClass
    }
  }
  INPUT (inputType:string,pClass:string,valText:string|undefined,inputName:string,inputLabel:string,placeholder:string){
    return {
      inputName,
      inputType,
      inputLabel ,
      placeholder,
      errors:this.errors ,
      register:this.register,
      parentClassName:pClass, 
      ...(valText!==undefined && {validation:FormValidation(valText)})
    }
  }

  

  TEXTAREA (pClass:string,valText:string,inputName:string,inputLabel:string,placeholder:string){
    
    console.log("----------------------",FormValidation(valText))
    return {
      inputName,
      inputLabel ,
      placeholder,
      errors:this.errors ,
      register:this.register,
      parentClassName:pClass, 
      validation:FormValidation(valText)
      // ...(valText!==undefined && {validation:FormValidation(valText)})
    }
  }
}
