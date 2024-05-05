import {useEffect } from 'react';

import styled,{ useTheme }		from "styled-components";
import { useForm,SubmitHandler }from 'react-hook-form';

import HEADER					from "../ui/components/HEADER"
import FormValidation			from '../../utility/form/formValidation'
import {onErrorAction,onSubmit}	from "../../utility/form/eventAction"
import {INPUT,REACT_SELECT as RSELECT, TEXTAREA, CHECKBOX,SELECT,FILE} 	from "../ui/elements/"
import useFetch, {FetchData}	from '../../utility/customHook/useGetAPI';
import usePostAPI 				from '../../utility/customHook/usePostAPI';
import {OBJECT_1}				from "../../utility/types/typeApp"


const Container=styled.div`${({theme}) => ``}`;


const FormContainer=styled.div`${({theme}) => ``}`;

export default () => {

	const theme = useTheme();

	const { data,success}: FetchData<OBJECT_1> = useFetch <OBJECT_1>('realestate/contact/connect',{});
	const { loading, error, response, postData } = usePostAPI();

	useEffect(()=>{
		console.log('Data successfully posted:', response);
	},[response])

	const {register,handleSubmit,formState: { errors },setValue,reset,control,getValues} = useForm({
		defaultValues: {
			firstName: "Niyaz",
			lastName: "Jalal",
			email:"nzjl94@gmail.com",
			dateAvailability:"2024-04-21",
			roomNumber:3,
			cityName:"null",
			//sendNotification:true
		}
	});
  return (
	<Container className="flex flex-col gap-[80px]">
    	<HEADER title={data.title} content={data.content} />
      	<FormContainer className=" border-[1px] rounded-[12px] border-gray-1">
			<form className="w-full" onSubmit={handleSubmit((data)=>onSubmit(data,postData),(error)=>onErrorAction(error,"connect"))}  >
				<div className="flex flex-wrap py-3">
					<INPUT 
						inputName="firstName" inputType="text"inputLabel="First Name" placeholder="Enter First Name" parentClassName="w-1/3" 
						register={register} errors={errors} validation={FormValidation("textFiled")} 
					/>
					<INPUT 
						inputName="lastName"  inputLabel="Last Name" placeholder="Enter Last Name"	parentClassName="w-1/3" 
						register={register} errors={errors} validation={FormValidation("textFiled")} 
					/>
					<INPUT 
						inputType="email" inputName="email" inputLabel="Email" placeholder="Enter Email" parentClassName="w-1/3" 
						register={register} errors={errors}  
					/>
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
					<RSELECT 
						inputName="buldingType" inputLabel="Building Type" control={control} parentClassName="w-1/2"
						options={[
							{ value: "office",  	label: "Office" },
							{ value: "cabin", 		label: "Cabin" },
							{ value: "apartment",   label: "Apartment" },
							{ value: "vila",    	label: "Vila" },
							{ value: "house",    	label: "House" },
						]}
						placeholder="Building Type"
						register={register} errors={errors} required 
					/>
					<SELECT 
						inputName="cityName" inputLabel="City Name" placeholder="Please Select Desire City"
						parentClassName="w-1/2" register={register} errors={errors} validation={FormValidation("select")} 
						options={["Hawler","Karkuk","Duhok","Sulaymaniyah"]}
					/>
				</div>
				{/* <div className="flex flex-wrap py-3">	
					<TEXTAREA 
						inputName="note" inputLabel="Note" placeholder="Please Enter any extra information"	parentClassName="w-full" 
						register={register} errors={errors} validation={FormValidation("textArea")} 
					/>
				</div> */}
				<div className="flex flex-wrap py-3">
					<FILE 
						parentClassName="w-full" inputName="fileBuildingImg" inputLabel="Building Image"
						register={register} errors={errors} validation={FormValidation("file")}
					/>
				</div>
				<div className="flex flex-wrap py-3">	
					<CHECKBOX 
						parentClassName="w-1/2" inputName="sendNotification" inputLabel="Send Notifications"
						options={{id:"yes",value:"Yes, Notify Me"}}
						register={register} errors={errors} validation={{}}
					/>
					<CHECKBOX 
						parentClassName="w-1/2" inputName="cityArea" inputLabel="Select City Area" listType="horList"
						options={["North","South","East","West"]}
						register={register} errors={errors} validation={FormValidation("checkBox")}
						// options={{"north":"North","south":"South","east":"East","west":"West"}}
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
  );
};