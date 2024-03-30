import {FieldErrors } from 'react-hook-form';
import {DefaultTheme} from "styled-components";



export interface HEADER_TYPE {
    [key: string]:string | undefined
}

export interface TEXTAREA_TYPE {
    inputName:string;
    inputLabel:string;
    parentClassName:string;
    placeholder:string;
    register:any;
    errors:FieldErrors;
    validation:{[key:string]:string}
}

export interface TEXT_STYLE {
    theme:DefaultTheme,
    fontSize?: string,
    fontStyle?: string,
    fontWeight?: string|number,
    lineHeight?: string,
    color?: string
}

export interface TEXT_PROPS_STYLE {
    text?: string,
    fontSize?: string,
    fontStyle?: string,
    fontWeight?: string|number,
    lineHeight?: string,
    color?: string,
    className?: string
}

export interface SELECT_TYPE {
    inputName:string;
    inputLabel:string;
    parentClassName:string;
    placeholder:string;
    validation:{};
    register:any;
    errors:FieldErrors;
    options:string[] | {[key: string]:string};
}

export interface REACT_SELECT_TYPE {
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

export type SELECT_OPTION_TYPE = {
    label: string;
    value: string;
};

export interface INPUT_TYPE {
    inputName:string;
    inputLabel:string;
    inputType?:string;
    register:any;
    // register:UseFormRegister<FieldValues>;
    errors:FieldErrors;
    validation?:any;
    parentClassName?:string;
    placeholder?:string;
}

export interface BUTTON_PROPS_TYPE {
    [key: string]:string
}

export interface CHECKBOX_TYPE {
    inputName:string;
    inputLabel:string;
    parentClassName:string;
    register:any;
    errors:FieldErrors;
    options:string[] | {[key: string]:string};
    validation:{};
    listType?:string;
}

export interface FILE_TYPE {
    inputName:string;
    inputLabel:string;
    parentClassName:string;
    register:any;
    errors:FieldErrors;
    validation:{};
}

export interface IMAGE_TYPE {
    activeBorder:boolean
}

export interface IMAGE_TYPE_2 {
    width?: number,
    height?: number,
    path?: string,
    activeBorder?: boolean,
    parentClass?: string
}
