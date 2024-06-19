import { useForm}    								from 'react-hook-form';
import {
    getSingleTitle,useSelector,
    RootState,HEADER,STAR,styled
}                               from "./header"
import {REACT_SELECT_INLINE} 	        from "../ui/elements/"

import useFetch, {FetchData}	from '../../utility/customHook/useGetAPI';
import {PROPERTY_FORM_TYPE}		from "../../utility/types/typeApp"
import {GENERATE_ELEMENT}	    from "../../utility/form/formUtility"



const HeaderContainer    = styled.div`${({theme}) => `
    background: linear-gradient(96deg, #262626 -26.82%, rgba(38, 38, 38, 0.00) 40.46%);
`}`;


const Search = () => {
    const {key,title,content} = useSelector((state: RootState) => getSingleTitle(state, "property_search"));

    const { data:{bath_number,bed_number,budget,location,type:property_type},success}: FetchData<PROPERTY_FORM_TYPE> = useFetch <PROPERTY_FORM_TYPE>('property/form/detail',{});

    const {register,handleSubmit,setFocus,formState: { errors },setValue,reset,control,getValues} = useForm({
		defaultValues: {}
	});

    const generate_element=new GENERATE_ELEMENT(control,errors,register,true)
    const HEADER_WITH_STAR = STAR(HEADER);

    return <div className="flex flex-col">

        <HeaderContainer className='cp-pd-x-1 py-[75px] relative'>
            <HEADER_WITH_STAR title={title} content={content} starClass={"-top-[45px] -left-[30px]"} />
        </HeaderContainer>

        <div className="cp-pd-x-1">
            <div className="">

            </div>
            <div className="flex gap-x-[20px] justify-center p-[10px] bg-gray-1 border-1 rounded-[12px]">
                <REACT_SELECT_INLINE 
                    inputName="buildingType"
                    placeholder="Location"
                    register={register}
                    options={property_type}
                    control={control}
                    errors={errors}
                    required={true}
                    parentClassName="bg-gray-1"
                
                />
				<REACT_SELECT_INLINE {...generate_element.SELECT("numBath","No. of Bathrooms", "","Property Type",bath_number,false)}/>
				<REACT_SELECT_INLINE {...generate_element.SELECT("numBed","No. of Bedrooms","","Pricing Range",bed_number,false)}/>
				<REACT_SELECT_INLINE {...generate_element.SELECT("numBed","No. of Bedrooms","","Property Size",bed_number,false)}/>
				<REACT_SELECT_INLINE {...generate_element.SELECT("numBed","No. of Bedrooms","","Build Year",bed_number,false)}/>
            </div>

        </div>
    </div>
}
export default Search