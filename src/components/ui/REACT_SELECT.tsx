import React,{CSSProperties}  from "react";
import Select,{StylesConfig} from "react-select"
import styled from "styled-components";
import {Controller,FieldErrors } from 'react-hook-form';



type MyOptionType = {
    label: string;
    value: string;
};
type IsMulti = false;


const customStyles: StylesConfig<MyOptionType, IsMulti>= {
    control: (baseStyles, state) => ({
        ...baseStyles,
        borderWidth:"1px",
        boxShadow: state.isFocused ? "#0ff" : "#0f0"
    }),
    valueContainer: (provided, state) => ({
      ...provided,
	    padding: '0.75rem 16px',
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
    menu: provided => ({
      ...provided,
    }),
    menuList: provided => ({
      ...provided,
      color:"#000"
    })
};

interface SELECT_TYPE {
    inputName:string;
    inputLabel:string;
    register:any;
    errors:FieldErrors;
    validation?:any;
    parentClassName?:string;
    placeholder?:string;
    required:boolean;
    control:any;
    options:any;
}

export default ({ 
    inputName, inputLabel, control,options, placeholder="",parentClassName="",
    register,errors, required
}:SELECT_TYPE) => (
    <div className={`${parentClassName} px-3`}>
	    <label className="block uppercase mb-2" htmlFor={inputName}>{inputLabel}</label>
        <Controller
            name={inputName}
            control={control}
            //defaultValue={"vanilla"
            //    //options.filter(c => c.value=="vanilla")
            //}
            render={({ field,formState,fieldState }) => {
                return (
                    <Select 
                        styles={customStyles} 
                        {...field} options={options} defaultValue={options[2]} />
                )
            }}
        />
	</div>
)