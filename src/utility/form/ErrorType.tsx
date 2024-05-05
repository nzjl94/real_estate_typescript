import {FieldErrors } from 'react-hook-form';


const getErrorMessage = (fieldName: string, errs: Record<string, any>): string | undefined =>
    typeof errs?.[fieldName]?.message === 'string' ? errs?.[fieldName]?.message : undefined;

interface ERROR_TYPE {
    errors:FieldErrors;
    inputName:string;
}

export default ({ inputName,errors}:ERROR_TYPE) =>{
    return (<>{
        errors[inputName] && <p className="text-red-500 text-xs italic text-left">{getErrorMessage(inputName, errors)}</p>
    }</>)
} 