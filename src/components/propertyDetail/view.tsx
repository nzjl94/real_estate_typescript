
import {
  getSingleTitle,useSelector,styled,RootState,
  TEXT,useFetch,FetchData,IMAGE,useTheme,HEADER,Galary
}  from "./header"

const Container = styled.div`${({theme}) => ``}`;
const FeatureElement = styled.div`${({theme}) => `
  background: linear-gradient(90deg, #1A1A1A 0%, rgba(26, 26, 26, 0.00) 100%);
`}`;

const View = () => {

  const theme= useTheme()

  const {key,title,content} = useSelector((state: RootState) => getSingleTitle(state, "property_detail_description"))
  const { data,success}: FetchData<string[]> = useFetch <string[]>('property_detail/view/feature_list',[]);

  const propertyDetail =(imgName:string,text1:string,text2:string)=>{
    
    const imageProp={
      width:21,
      height:21,
      activeBorder:false,
      path:`/image/home/property/${imgName}.svg`
    }

    return (<div className='grid grid-rows-2 gap-y-[10px]'>
      <div className="flex space-x-[10px] w-full items-center">
        <IMAGE {...imageProp}  />
        <TEXT responsive="set2"  text={text1} />
      </div>
      <TEXT text={text2} responsive="set7" />
    </div>)
  }

  return  <Container>
    <div className="">
      <div className="flex flex-wrap justify-start gap-x-[20px] gap-y-[10px] items-center mb-[30px] lg:mb-[40px] xl:mb-[50px]">
        <TEXT text={"Seaside Serenity Villa"} responsive="set9" className="" />
        <div className="flex items-center border border-gray-1 rounded-[8px] space-x-[6px] p-[8px] md:p-[10px]">
            <IMAGE width={24} height={24} path="/image/property_detail/location.svg" activeBorder={false} />
            <TEXT text={"Malibu, California"} responsive="set2" fontWeight={500} color={theme.colors.gray1} />
        </div>
        <div className="md:ml-auto	 grid grid-flow-col gap-y-0 gap-x-[4px] md:gap-x-0 md:grid-flow-row md:gap-y-[2px]">
          <TEXT text="Price" responsive="set2" color={theme.colors.gray1} />
          <TEXT text="$1,250,000" responsive="set7" />
        </div>
      </div>
      <Galary />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-[20px]">
      <div className="p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px] flex flex-col space-y-[20px] md:space-y-[30px] lg:space-y-[40px] xl:space-y-[50px]">
        <HEADER title={title} content={content} parentClass="grid-cols-4 gap-y-[14px]" titleSet="set7" />
        <div className="flex flex-row flex-wrap justify-between	border-t border-gray-1 pt-[20px] px-[10px]">
          {propertyDetail("bed" ,`Bedrooms`,'04')}
          <div className="w-[1px] h-full bg-gray-5"></div>
          {propertyDetail("bath",`Bathrooms`,'03')}
          <div className="w-0 md:w-[1px] h-full bg-gray-5"></div>
          {propertyDetail("area",`Area`,'2,500 Square Feet')}
        </div>
      </div>
      <div className="p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px] grid gap-y-[20px] md:gap-y-[30px] lg:gap-y-[40px] xl:gap-y-[50px]">
        <TEXT text="Key Features and Amenities" responsive="set7" />
        <div className="grid gap-y-[18px] md:gap-y-[20px] lg:gap-y-[25px] xl:gap-y-[30px]">{
          data.map(val=>(<FeatureElement className="flex border-l border-purple-1 space-x-[10px] py-[10px] px-[12px] lg:py-[14px] lg:px-[16px] xl:py-[18px] xl:px-[24px]">
            <IMAGE width={24} height={24} path="/image/property_detail/key_feature_icon.svg" activeBorder={false} />
            <TEXT text={val} responsive="set2" fontWeight={500} color={theme.colors.gray1} />
          </FeatureElement>))
        }</div>
      </div>
    </div>
  </Container>
  
}
export default View