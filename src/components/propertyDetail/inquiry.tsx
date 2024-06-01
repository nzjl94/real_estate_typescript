import { useForm}    								from 'react-hook-form';

import {INPUT,REACT_SELECT, TEXTAREA, CHECKBOX} 	from "../ui/elements/"
import usePostAPI 									from '../../utility/customHook/usePostAPI';
import {GENERATE_ELEMENT}							from "../../utility/form/formUtility"
import {onErrorAction,onSubmit}						from "../../utility/form/eventAction"


import {
  getSingleTitle,useSelector,styled,RootState,HEADER,STAR
}  from "./header"

const Container = styled.div`${({theme}) => ``}`;

const Inquiry = () => {

	const { loading, error, response, postData } = usePostAPI();
  	const {key,title,content} = useSelector((state: RootState) => getSingleTitle(state, "property_detail_inquire"));
  	const {register,handleSubmit,setFocus,formState: { errors },setValue,reset,control,getValues} = useForm({
		defaultValues: {}
	})
  	const generate_element=new GENERATE_ELEMENT(control,errors,register,true)

	return  <Container className="grid grid-flow-row gap-y-[40px] md:gap-y-[0px] md:grid-cols-5 gap-x-0 md:gap-x-[60px] lg:gap-x-[80px] xl:gap-x-[100px]">
    	<HEADER title={title} content={content} parentClass="md:col-span-2 grid-cols-4 gap-y-[14px]"  />
		<form className="md:col-span-3" onSubmit={
			handleSubmit((data)=>onSubmit("property_detail/form/inquire",data,postData),(error)=>onErrorAction(error,"request"))
		}>
			<div className="p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px] grid gap-y-[20px] md:gap-y-[30px] lg:gap-y-[40px] xl:gap-y-[50px]">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-[20px] md:gap-y-[30px]">
					<INPUT {...generate_element.INPUT("text","","textFiled","firstName","First Name","Enter First Name")}/>
					<INPUT {...generate_element.INPUT("text","","textFiled","lastName","Last Name","Enter Last Name")}/>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-[20px] md:gap-y-[30px]">
					<INPUT {...generate_element.INPUT("text","","email","email","Email","Enter Email")}/>
					<INPUT {...generate_element.INPUT("text","","textFiled","phoneNumber","Phone","Enter Phone Name")}/>
				</div>
				<div className="w-full">
					<REACT_SELECT {...generate_element.SELECT("location","Preferred Location","","Select Location",{
					"p1":"Property 1","p2":"Property 2","p3":"Property 3","p4":"Property 4","p5":"Property 5"
				})}/>
				</div>
				<div className="flex flex-wrap">	
					<TEXTAREA {...generate_element.TEXTAREA("w-full","textArea","message","Message","Enter your Message here...")} />
				</div>
				<div className="flex justify-center md:justify-between flex-wrap">	
					<CHECKBOX 
						{...generate_element.CHECKOX(
							"","termAgree","Term Agreement",false,{id:"termCheckbox",value:"I agree with Terms of Use and Privacy Policy"}
						)}
					/>
					<button type="submit" className="text-white text-[14px] bg-purple-1 py-[14px] px-[34px] rounded">
						Send Your Message
					</button>
				</div> 
			</div>
		</form>
  	</Container>
}
export default Inquiry