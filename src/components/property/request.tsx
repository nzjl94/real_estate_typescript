import styled                       				from "styled-components";
import { useForm}    								from 'react-hook-form';


import {INPUT,REACT_SELECT, TEXTAREA, CHECKBOX} 	from "../ui/elements/"
import useFetch, {FetchData}						from '../../utility/customHook/useGetAPI';
import {PROPERTY_FORM_TYPE}							from "../../utility/types/typeApp"
import {GENERATE_ELEMENT}							from "../../utility/form/formUtility"
import {onErrorAction,onSubmit}						from "../../utility/form/eventAction"

import usePostAPI 									from '../../utility/customHook/usePostAPI';
			
import {STAR,HEADER}                				from "../ui/components/"



const Request = () => {

	const { loading, error, response, postData } = usePostAPI();

    
    const {title,content} ={
        title:"Let's Make it Happen",
        content:"Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."
    }
	const { data:{bath_number,bed_number,budget,location,type:property_type},success}: FetchData<PROPERTY_FORM_TYPE> = useFetch <PROPERTY_FORM_TYPE>('realestate/property/form/detail',{});

    const Container = styled.div`${({theme}) => ``}`;
    const FormContainer=styled.div`${({theme}) => ``}`;

    const {register,handleSubmit,formState: { errors },setValue,reset,control,getValues} = useForm({
		defaultValues: {}
	});

	const generate_element=new GENERATE_ELEMENT(control,errors,register,true)


    const HEADER_WITH_STAR = STAR(HEADER);
    
    return <Container className='flex flex-col gap-y-[40px] md:gap-y-[60px] lg:gap-y-[80px] px-[16px] lg:px-[80px] xl:px-[160px] py-[75px] relative'>

        <HEADER_WITH_STAR title={title} content={content} starClass={"-top-[45px] -left-[30px]"} />
		{/*  */}property/request
        <form className="w-full" onSubmit={handleSubmit((data)=>onSubmit("property/request",data,postData),(error)=>onErrorAction(error,"request"))}  >
			<FormContainer className="flex flex-col gap-y-[30px] border-[1px] rounded-[12px] border-gray-1 p-[50px]">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[30px] gap-y-[20px] lg:gap-y-[0px]">
					<INPUT {...generate_element.INPUT("text","","textFiled","firstName","First Name","Enter First Name")}/>
					<INPUT {...generate_element.INPUT("text","","textFiled","lastName","Last Name","Enter Last Name")}/>
					<INPUT {...generate_element.INPUT("text","",undefined,"email","Email","Enter Email")}/>
					<INPUT {...generate_element.INPUT("text","","textFiled","phoneNumber","Phone","Enter Phone Name")}/>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[20px] lg:gap-y-[0px]">
					<REACT_SELECT {...generate_element.SELECT("buildingType","Property Type","","Select Property Type",property_type)}/>
					<REACT_SELECT {...generate_element.SELECT("numBath","No. of Bathrooms", "","Select no. of Bathrooms",bath_number)}/>
					<REACT_SELECT {...generate_element.SELECT("numBed","No. of Bedrooms","","Select no. of Bedrooms",bed_number)}/>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-[20px] md:gap-y-[0px]">
					<REACT_SELECT {...generate_element.SELECT("location","Preferred Location","","Select Location",location)}/>
					<REACT_SELECT {...generate_element.SELECT("budget","Budget","","Select Buget",budget)}/>
				</div>
				<div className="flex flex-wrap">	
					<TEXTAREA {...generate_element.TEXTAREA("w-full","textArea","message","Message","Enter your Message here...")} />
				</div>
				<div className="flex justify-between flex-wrap">	
					<CHECKBOX 
						{...generate_element.CHECKOX(
							"","termAgree","Term Agreement",false,{id:"termCheckbox",value:"I agree with Terms of Use and Privacy Policy"}
						)}
					/>
					<button type="submit" className="text-white text-[14px] bg-purple-1 py-[14px] px-[34px] rounded">
						Send Your Message
					</button>
				</div> 
        	</FormContainer>
		</form>

    </Container>  
}
export default Request