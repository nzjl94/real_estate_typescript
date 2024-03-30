import Select,{StylesConfig} from "react-select"
import {Controller } from 'react-hook-form';
import {REACT_SELECT_TYPE,SELECT_OPTION_TYPE} from "../../utility/typeApp"

type IsMulti = false;

const customStyles: StylesConfig<SELECT_OPTION_TYPE, IsMulti>= {
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

export default ({ 
    inputName, inputLabel, control,options, placeholder="",parentClassName="",
    register,errors, required
}:REACT_SELECT_TYPE) => (
    <div className={`${parentClassName} px-3`}>
	    <label className="block uppercase mb-2 text-left" htmlFor={inputName}>{inputLabel}</label>
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