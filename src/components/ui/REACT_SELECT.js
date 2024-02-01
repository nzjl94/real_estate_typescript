"use client";

import React  from "react";
import Select from "react-select"
import styled from "styled-components";
import {Controller } from 'react-hook-form';


const customStyles = {
    control: (provided, state) => ({
      ...provided,
      // background: '#fff',
      // borderColor: '#9e9e9e',
	    borderWidth:"1px",
      //minHeight: '30px',
      //height: '30px',
	    //padding: '0.3rem 0px',
      boxShadow: state.isFocused ? null : null,
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

export default ({ inputName, inputLabel, control,options, register,errors, required,placeholder="",parentClassName=""}) => (
    <div className={`${parentClassName} px-3`}>
		  <label className="block uppercase mb-2" htmlFor={inputName}>{inputLabel}</label>
      <Controller
          name={inputName}
          control={control}
          className="text-black"
          //defaultValue={"vanilla"
          //    //options.filter(c => c.value=="vanilla")
          //}
          render={({ field,formState,fieldState }) => {
            return (
                <Select styles={customStyles} {...field} options={options} defaultValue={options[2]} />
            )
          }}
      />
	</div>
)