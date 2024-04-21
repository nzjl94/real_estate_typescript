import {FieldErrors } from 'react-hook-form';
import {DefaultTheme} from "styled-components";

export interface OBJECT_1 {
    [key: string]:string
}
interface TEXT_PROPS {
    fontSize?: string;
    fontStyle?: string;
    fontWeight?: string|number;
    lineHeight?: string;
    color?: string;
}
export interface TEXT_STYLE_1 extends TEXT_PROPS{
    theme:DefaultTheme;
}
export interface TEXT_STYLE_2 extends TEXT_PROPS{
    text?: string;
    className?: string;
}
export interface TEXT_STYLE_3{
    theme:DefaultTheme;
    background?:string;
}
interface INPUT_FIELD_1 {
    inputName:string;
    inputLabel:string;
    parentClassName:string;
    // register:UseFormRegister<FieldValues>;
    register:any;
    errors:FieldErrors;
    placeholder?:string;
}
interface INPUT_FIELD_2 {
    required:boolean;
    control:any;
    label: string;
    value: string;
    inputType?:string;
    listType?:string;
}
export interface TEXTAREA_TYPE extends INPUT_FIELD_1{
    validation:OBJECT_1
}
export interface SELECT_TYPE extends INPUT_FIELD_1{
    validation:{};
    options:string[] | OBJECT_1;
}
export interface REACT_SELECT_TYPE extends INPUT_FIELD_1, Pick<INPUT_FIELD_2,"required" | "control">{
    validation?:any;
    options:any;
}
export type SELECT_OPTION_TYPE = Pick<INPUT_FIELD_2, "label" | "value">
export interface INPUT_TYPE extends INPUT_FIELD_1, Pick<INPUT_FIELD_2,"inputType" >{
    validation?:any;
}
export interface CHECKBOX_TYPE extends Omit<INPUT_FIELD_1,"placeholder">, Pick<INPUT_FIELD_2,"listType" >{
    options:string[] | OBJECT_1;
    validation:{};
}
export interface FILE_TYPE extends  Omit<INPUT_FIELD_1,"placeholder">{
    validation:{};
}
export interface IMAGE_TYPE {
    activeBorder:boolean
}
export interface IMAGE_TYPE_2 {
    width?: number;
    height?: number;
    path?: string;
    activeBorder?: boolean;
    parentClass?: string;
    eleClass?:string;
}
export interface HEADER_TYPE {
    [key: string]: string | undefined
}
export interface HEADER_TYPE_2 {
    title:string;
    content:string;
    parentClass?:string;
}
export interface TEXT_PARAGRAPH {
    title: string;
    content: string;
}
export interface API_DATA_1 {
    title: OBJECT_1,
    sections: OBJECT_1[] //Array<OBJECT_1>
}
export interface API_DATA_2 {
    title: OBJECT_1,
    sections: TEXT_PARAGRAPH[]
}
export interface API_DATA_3 {
    title: OBJECT_1,
    sections: Array<{[key: string]:OBJECT_1}>
}
export interface API_DATA_4 {
    title:string;
    content:string;
    url:string;
}
export interface API_DATA_5 {
    title?:string;
    text:string;
    icon?:string;
}
export interface SERVICE_TYPE {
    data:Array<API_DATA_5>
}