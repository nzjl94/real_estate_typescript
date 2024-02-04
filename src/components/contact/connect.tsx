"use client";

import React, { useState, useEffect} from "react";
import styled,{ useTheme } from "styled-components";
import { useForm,Controller } from 'react-hook-form';


import HEADER from "../ui/HEADER"

import {getAPIData} 	from '../../utility/API'
import FormValidation 	from '../../utility/formValidation'


// import {INPUT,RSELECT, TEXTAREA, CHECKBOX,SELECT,FILE} from "../ui/FORM"


const Container=styled.div`${({theme}) => ``}`;

const FormContainer=styled.div`${({theme}) => ``}`;

export default () => {

  const theme = useTheme();
  const [data, setData] = useState<{[key: string]:string}>({})

  const {register,handleSubmit,formState: { errors },setValue,reset,control,getValues} = useForm({
	defaultValues: {
		firstName: "Niyaz",
		lastName: "Jalal",
		email:"nzjl94@gmail.com",
		cityName:null,
		sendNotification:true
	}
  });
//   const onSubmit = (data) => {
// 	console.log(data)
// 	// reset()
//     //setValue("note",""); //===>>> reseting value
// 	//let formData = new FormData();
//     //formData.append("content", data);
//     //formData.append("user", user?.id);
//     //setValue("content","");

//   }
//   const onSubmit = async (data) => {
// 	// console.log(data,getValues())
// 	// console.log("file", data.buildingImg[0]);

// 	const {firstName}=data
//     const formData = new FormData();
//     formData.append("firstName", firstName);
//     formData.append("buildingImg", data.buildingImg[0]);

//     const res = await fetch("/api/contact/connect", {
//     	method: "POST",
// 		//headers: {
// 		//	"Content-Type": "application/x-www-form-urlencoded",
// 		//},
//     	body: formData,
//     }).then((res) => res.json());
//     //alert(JSON.stringify(`${res.message}, status: ${res.status}`));
//   };
//   const onErrors = errors => {
// 	//console.log(errors);
//   }
  useEffect( () => {
    getAPIData('contact_connect',setData)
  }, [])

  return (
    <Container className="flex flex-col gap-[80px]">
      <HEADER title={data.title} content={data.content} />
      {/* <FormContainer className="p-[100px] border-[1px] rounded-[12px] border-gray-1">

		<form className="w-full" onSubmit={handleSubmit(onSubmit,onErrors)} >
			<div className="flex flex-wrap py-3">
				<INPUT 
					inputName="firstName" inputLabel="First Name" placeholder="Enter First Name" parentClassName="w-1/3" 
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
					inputType="date" inputName="availabilityDate"  inputLabel="Availability Date" placeholder="Please Enter the Availability Date"	
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
					inputName="cityName" inputLabel="Desire City" placeholder="Please Select Desire City"
					parentClassName="w-1/2" register={register} errors={errors} required 
					options={["Hawler","Karkuk","Duhok","Sulaymaniyah"]}
				/>
			</div>
			<div className="flex flex-wrap py-3">	
				<TEXTAREA 
					inputName="note" inputLabel="Note" placeholder="Please Enter any extra information"	parentClassName="w-full" 
					register={register} errors={errors} validation={FormValidation("textArea")} 
				/>
			</div>
			<div className="flex flex-wrap py-3">
				<FILE 
					parentClassName="w-full" inputName="buildingImg" inputLabel="Building Image"
					register={register} errors={errors} validation={FormValidation("file")}
				/>

			</div>
			<div className="flex flex-wrap py-3">	
				<CHECKBOX 
					parentClassName="w-1/2" inputName="sendNotification" inputLabel="Send Notifications"
					options={{key:"yes",value:"Yes, Notify Me"}}
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
      </FormContainer> */}
    </Container>
  );
};