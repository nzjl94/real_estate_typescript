import { useForm}    								from 'react-hook-form';
import {INPUT,REACT_SELECT, TEXTAREA, CHECKBOX} 	from "../ui/elements/"
import useFetch, {FetchData}						from '../../utility/customHook/useGetAPI';
import {PROPERTY_FORM_TYPE}							from "../../utility/types/typeApp"
import {GENERATE_ELEMENT}							from "../../utility/form/formUtility"
import {onErrorAction,onSubmit}						from "../../utility/form/eventAction"
import usePostAPI 									from '../../utility/customHook/usePostAPI';

import {
	getSingleTitle,useSelector,RootState,HEADER,
	STAR,styled
}   from "./header"


const Container    = styled.div`${({theme}) => ``}`;
const FormContainer= styled.div`${({theme}) => ``}`;

const Request = () => {

	const { loading, error, response, postData } = usePostAPI();
	const {key,title,content} = useSelector((state: RootState) => getSingleTitle(state, "property_request"));

	const { data:{bath_number,bed_number,budget,location,type:property_type},success}: FetchData<PROPERTY_FORM_TYPE> = useFetch <PROPERTY_FORM_TYPE>('property/form/detail',{});

    const {register,handleSubmit,setFocus,formState: { errors },setValue,reset,control,getValues} = useForm({
		defaultValues: {}
	});
	const generate_element=new GENERATE_ELEMENT(control,errors,register,true)
    const HEADER_WITH_STAR = STAR(HEADER);
    
    return <Container className='flex flex-col cp-gap-y-2 py-[75px] relative'>

        <HEADER_WITH_STAR title={title} content={content} starClass={"-top-[45px] -left-[30px]"} />
        <form className="w-full" onSubmit={
			handleSubmit(
				(data)=>onSubmit("property/request",data,postData),
				(error)=>onErrorAction(error,"request")
			)
		}>
			<FormContainer className="flex flex-col gap-y-[30px] border-[1px] rounded-[12px] border-gray-1 p-[50px]">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[30px] gap-y-[20px] lg:gap-y-[0px]">
					<INPUT {...generate_element.INPUT("text","","textFiled","firstName","First Name","Enter First Name")}/>
					<INPUT {...generate_element.INPUT("text","","textFiled","lastName","Last Name","Enter Last Name")}/>
					<INPUT {...generate_element.INPUT("text","","email","email","Email","Enter Email")}/>
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