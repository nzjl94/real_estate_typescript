import {StylesConfig}  from "react-select"
import {SELECT_OPTION_TYPE} from "../types/typeApp"



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