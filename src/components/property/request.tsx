import styled                       from "styled-components";


import {INPUT,REACT_SELECT, TEXTAREA, CHECKBOX} 	from "../ui/elements/"
import useFetch, {FetchData}						from '../../utility/customHook/useGetAPI';
			
import {PROPERTY_FORM_TYPE}							from "../../utility/types/typeApp"
			
import {GENERATE_ELEMENT}							from "../../utility/form/formUtility"
			
import { useForm}    								from 'react-hook-form';
			
import {STAR,HEADER}                				from "../ui/components/"

const Request = () => {

    
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
        <form className="w-full" onSubmit={handleSubmit(()=>{},()=>{})}  >
			<FormContainer className="flex flex-col gap-y-[30px] border-[1px] rounded-[12px] border-gray-1 p-[50px]">
				<div className="flex flex-wrap">
					<INPUT {...generate_element.INPUT("text","w-1/4","textFiled","firstName","First Name","Enter First Name")}/>
					<INPUT {...generate_element.INPUT("text","w-1/4","textFiled","lastName","Last Name","Enter Last Name")}/>
					<INPUT {...generate_element.INPUT("text","w-1/4",undefined,"email","Email","Enter Email ")}/>
					<INPUT {...generate_element.INPUT("text","w-1/4","textFiled","phone","Phone","Enter Phone Name")}/>
				</div>
				<div className="flex flex-wrap">
					{/* <INPUT 
						inputType="number" inputName="roomNumber"  inputLabel="Room Number" placeholder="Please Enter the Room Number"	
						parentClassName="w-1/2" 
						register={register} errors={errors} 
						validation={FormValidation("numberFiled")} 
					/>
					<INPUT
						inputType="date" inputName="dateAvailability"  inputLabel="Availability Date" placeholder="Please Enter the Availability Date"	
						parentClassName="w-1/2" 
						register={register} errors={errors} validation={FormValidation("dateFiled")} 
					/> */}
				</div>
				<div className="flex flex-wrap">
					<REACT_SELECT {...generate_element.SELECT("location","Preferred Location","w-1/4","Select Location",location)}/>
					<REACT_SELECT {...generate_element.SELECT("property","Property Type","w-1/4","Select Property Type",property_type)}/>
					<REACT_SELECT {...generate_element.SELECT("nf_bathroom","No. of Bathrooms","w-1/4","Select no. of Bathrooms",bath_number)}/>
					<REACT_SELECT {...generate_element.SELECT("nf_bedroom","Preferred Location","w-1/4","Select no. of Bedrooms",bed_number)}/>
				</div>
				<div className="flex flex-wrap">	
					<TEXTAREA {...generate_element.TEXTAREA("w-full","textArea","message","Message","Enter your Message here...")} />
				</div>
				<div className="flex justify-between flex-wrap">	
					<CHECKBOX 
						parentClassName="" 
						inputName="sendNotification" 
						inputLabel="Send Notifications"
						show_label={false}
						options={{id:"termCheckbox",value:"I agree with Terms of Use and Privacy Policy"}}
						register={register} 
						errors={errors} 
						validation={{}}
					/>
					<button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						Submit
					</button>
				</div> 
        	</FormContainer>
		</form>

    </Container>  
}
export default Request