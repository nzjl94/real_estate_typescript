
import {
  getSingleTitle,useSelector,styled,RootState,CARD7,
  HEADER,TEXT,useTheme
}  from "./header"

const Container = styled.div`${({theme}) => ``}`;

const Price = () => {

  const theme = useTheme();

  const {key,title,content} = useSelector((state: RootState) => getSingleTitle(state, "property_detail_pricing"));

  return  <Container className="flex flex-col gap-y-[40px] lg:gap-y-[60px] xl:gap-y-[80px]">
    <HEADER title={title} content={content} parentClass="md:col-span-2 grid-cols-4 gap-y-[14px]"  />
    <div className="flex flex-col gap-y-[40px] lg:gap-y-[50px]">
      <div className="flex flex-col md:flex-row items-left md:items-center bg-gray-1 p-[24px] lg:px-[50px] lg:py-[30px] xl:px-[50px] xl:py-[30px] gap-y-[10px] gap-x-[16px] lg:gap-x-[20px] border border-gray-1 rounded-[8px] lg:rounded-[12px]">
        <TEXT responsive="set7"  text="Note" className="text-left" />
        <div className="h-[1px] w-full md:h-full md:w-[1px] bg-gray-5"></div>
        <TEXT responsive="set2"  color={theme.colors.gray1} fontWeight={500} text="The figures provided above are estimates and may vary depending on the property, location, and individual circumstances." />
      </div>
      <div className="flex flex-col md:flex-row  gap-y-[20px] gap-x-[30px] lg:gap-x-[40px] xl:gap-x-[40px]">
        <div className="flex gap-y-[2px] flex-col">
          <TEXT responsive="set5" text="Listing Price" color={theme.colors.gray1}  fontWeight={500} />
          <TEXT responsive="set6" text="$1,250,000" />
        </div>
        <div className="flex-1 flex flex-col gap-y-[40px]">
          <CARD7 title={"Additional Fees"} />
          <CARD7 title={"Monthly Costs"} />
          <CARD7 title={"Total Initial Costs"} />
          <CARD7 title={"Monthly Expenses"} />
        </div>
      </div>
      
    </div>
  </Container>
}
export default Price