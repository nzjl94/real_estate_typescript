import {useEffect } from 'react';

import styled,{ useTheme }		from "styled-components";
import { useForm} 				from 'react-hook-form';
import {PROPERTY_FORM_TYPE}		from "../../utility/types/typeApp"



import {GENERATE_ELEMENT}		from "../../utility/form/formUtility"
import HEADER					from "../ui/components/HEADER"
import FormValidation			from '../../utility/form/formValidation'
import {onErrorAction,onSubmit}	from "../../utility/form/eventAction"
import {INPUT,REACT_SELECT, TEXTAREA, CHECKBOX,SELECT} 	from "../ui/elements/"
import useFetch, {FetchData}	from '../../utility/customHook/useGetAPI';
import usePostAPI 				from '../../utility/customHook/usePostAPI';
import {OBJECT_1}				from "../../utility/types/typeApp"


const Container     = styled.div`${({theme}) => ``}`;
const FormContainer = styled.div`${({theme}) => ``}`;

export default () => {
	const { loading, error, response, postData } = usePostAPI();

	const { data,success}: FetchData<OBJECT_1> = useFetch <OBJECT_1>('contact/connect',{});
	const { data:{inquiry,contact},success:_}: FetchData<PROPERTY_FORM_TYPE> = useFetch <PROPERTY_FORM_TYPE>('contact/form/detail',{});

	const {register,handleSubmit,formState: { errors },setValue,reset,control,getValues} = useForm({
		defaultValues: {}//it has problems with typing
	});
	const generate_element=new GENERATE_ELEMENT(control,errors,register,true)

  return (
	<Container className="flex flex-col gap-[80px]">
    	<HEADER title={data.title} content={data.content} />
		<form className="w-full" onSubmit={handleSubmit((data)=>onSubmit("contact/store",data,postData),(error)=>onErrorAction(error,"connect")) }>
			<FormContainer className="flex flex-col gap-y-[30px] border-[1px] rounded-[12px] border-gray-1 p-[50px]">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-x-[30px] gap-y-[20px] lg:gap-y-[0px]">
					<INPUT {...generate_element.INPUT("text","","textFiled","firstName","First Name","Enter First Name")}/>
					<INPUT {...generate_element.INPUT("text","","textFiled","lastName","Last Name","Enter Last Name")}/>
					<INPUT {...generate_element.INPUT("text","","email","email","Email","Enter Email")}/>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-x-[30px] gap-y-[20px] lg:gap-y-[0px]">
					<INPUT {...generate_element.INPUT("text","","textFiled","phoneNumber","Phone","Enter Phone Name")}/>
					<REACT_SELECT {...generate_element.SELECT("inquiryType","Inquiry Type","","Select Inquiry Type",inquiry)}/>
					<REACT_SELECT {...generate_element.SELECT("contactType","How Did You Hear About Us?","","Select",contact)}/>
				</div>
				<div className="flex flex-wrap">	
					<TEXTAREA {...generate_element.TEXTAREA("w-full","textArea","message","Message","Enter your Message here...")} />
				</div>
				<div className="flex justify-between flex-wrap">	
					<CHECKBOX {...generate_element.CHECKOX("","termAgree","Term Agreement",false,{id:"termCheckbox",value:"I agree with Terms of Use and Privacy Policy"})}/>
					<button type="submit" className="text-white text-[14px] bg-purple-1 py-[14px] px-[34px] rounded">
						Send Your Message
					</button>
				</div>  
			</FormContainer> 
		</form>
    </Container>
  );
};