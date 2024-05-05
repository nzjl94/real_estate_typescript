import styled                       from "styled-components";


import {INPUT,REACT_SELECT, TEXTAREA, CHECKBOX} 	from "../ui/elements/"
import FormValidation			    	from '../../utility/form/formValidation'
import useFetch, {FetchData}			from '../../utility/customHook/useGetAPI';

import {PROPERTY_FORM_TYPE}				from "../../utility/types/typeApp"


import { useForm,SubmitHandler }    from 'react-hook-form';

import {STAR,HEADER}                from "../ui/components/"

const Request = () => {
    
    const {title,content} ={
        title:"Let's Make it Happen",
        content:"Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."
    }
	const { data:{bath_number,bed_number,budget,location,type:property_type},success}: FetchData<PROPERTY_FORM_TYPE> = useFetch <PROPERTY_FORM_TYPE>('realestate/property/form/detail',{});

	console.log(bath_number,bed_number,budget,location,property_type)

    const Container = styled.div`${({theme}) => ``}`;
    const FormContainer=styled.div`${({theme}) => ``}`;

    const {register,handleSubmit,formState: { errors },setValue,reset,control,getValues} = useForm({
		defaultValues: {}
	});

    const generate_input =(inputType:string,pClass:string,valText:string|undefined,inputName:string,inputLabel:string,placeholder:string)=>({
        inputName,
        inputType,
        inputLabel ,
        placeholder,
        parentClassName:pClass, 
		register:register ,
        errors:errors ,
        ...(valText!==undefined && {validation:FormValidation(valText)})
    })


    const HEADER_WITH_STAR = STAR(HEADER);
    
    return <Container className='flex flex-col gap-y-[40px] md:gap-y-[60px] lg:gap-y-[80px] px-[16px] lg:px-[80px] xl:px-[160px] py-[75px] relative'>

        <HEADER_WITH_STAR title={title} content={content} starClass={"-top-[45px] -left-[30px]"} />

        <FormContainer className=" border-[1px] rounded-[12px] border-gray-1">
            <form className="w-full" onSubmit={handleSubmit(()=>{},()=>{})}  >
				<div className="flex flex-wrap py-3">
					<INPUT {...generate_input("text","w-1/4","textFiled","firstName","First Name","Enter First Name")}/>
					<INPUT {...generate_input("text","w-1/4","textFiled","lastName","Last Name","Enter Last Name")}/>
					<INPUT {...generate_input("text","w-1/4",undefined,"email","Email","Enter Email ")}/>
					<INPUT {...generate_input("text","w-1/4","textFiled","phone","Phone","Enter Phone Name")}/>
				</div>
				<div className="flex flex-wrap py-3">
					<INPUT 
						inputType="number" inputName="roomNumber"  inputLabel="Room Number" placeholder="Please Enter the Room Number"	
						parentClassName="w-1/2" 
						register={register} errors={errors} 
						validation={FormValidation("numberFiled")} 
					/>
					<INPUT
						inputType="date" inputName="dateAvailability"  inputLabel="Availability Date" placeholder="Please Enter the Availability Date"	
						parentClassName="w-1/2" 
						register={register} errors={errors} validation={FormValidation("dateFiled")} 
					/>
				</div>
				<div className="flex flex-wrap py-3">
					<REACT_SELECT 
						inputName="buldingType" inputLabel="Preferred Location" control={control} parentClassName="w-1/4"
						options={location!==undefined && Object.keys(location).map(key=>({value:key,label:location[key]}))}

						placeholder="Select Location"
						register={register} errors={errors} required 
					/>
					<REACT_SELECT 
						inputName="buldingType" inputLabel="Property Type" control={control} parentClassName="w-1/4"
						options={property_type!==undefined && Object.keys(property_type).map(key=>({value:key,label:property_type[key]}))}
						placeholder="Select Property Type"
						register={register} errors={errors} required 
					/>
					<REACT_SELECT 
						inputName="buldingType" inputLabel="No. of Bathrooms" control={control} parentClassName="w-1/4"
						options={bath_number!==undefined && Object.keys(bath_number).map(key=>({value:key,label:bath_number[key]}))}
						placeholder="Select no. of Bathrooms"
						register={register} errors={errors} required 
					/>
					<REACT_SELECT 
						inputName="buldingType" inputLabel="No. of Bedrooms" control={control} parentClassName="w-1/4"
						options={bed_number!==undefined && Object.keys(bed_number).map(key=>({value:key,label:bed_number[key]}))}
						placeholder="Select no. of Bedrooms"
						register={register} errors={errors} required 
					/>
				</div>
				{/* <div className="flex flex-wrap py-3">	
					<TEXTAREA 
						inputName="note" inputLabel="Note" placeholder="Please Enter any extra information"	parentClassName="w-full" 
						register={register} errors={errors} validation={FormValidation("textArea")} 
					/>
				</div> */}
				<div className="flex flex-wrap py-3">	
					<CHECKBOX 
						parentClassName="w-full" inputName="sendNotification" inputLabel="Send Notifications"
						options={{id:"yes",value:"Yes, Notify Me"}}
						register={register} errors={errors} validation={{}}
					/>
				</div>
				<div className="flex flex-row-reverse pt-6">
					<button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						Submit
					</button>
				</div>  
			</form>
        </FormContainer>
    </Container>  
}
export default Request