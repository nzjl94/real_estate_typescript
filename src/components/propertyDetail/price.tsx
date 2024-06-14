
import {
  getSingleTitle,useSelector,styled,RootState,CARD7,
  HEADER,TEXT,useTheme
}  from "./header"

const Container = styled.div`${({theme}) => ``}`;

type CardDataType= {
  [key:string]:{
    sec:number;
    title:string;
    price:number|string;
    note?:string;
  }[]
}
const CardData:CardDataType ={
  "card1":[
    {sec:1,title:"Property Transfer Tax", price:25000,    note:"Based on the sale price and local regulations"},
    {sec:1,title:"Legal Fees",            price:3000 ,    note:"Approximate cost for legal services, including title transfer"},
    {sec:2,title:"Home Inspection",       price:500,      note:"Recommended for due diligence"},
    {sec:2,title:"Property Insurance",    price:1200,     note:"Annual cost for comprehensive property insurance"},
    {sec:3,title:"Mortgage Fees",         price:"Varies", note:"If applicable, consult with your lender for specific details"}
  ],
  "card2":[
    {sec:1,title:"Property Taxes",              price:1250,   note:"Approximate monthly property tax based on the sale price and local rates"},
    {sec:2,title:"Homeowners' Association Fee", price:300,    note:"Monthly fee for common area maintenance and security"},
  ],
  "card3":[
    {sec:1,title:"Listing Price",   price:1250000   },
    {sec:1,title:"Additional Fees", price:29700,    note:"Property transfer tax, legal fees, inspection, insurance"},
    {sec:2,title:"Down Payment",    price:250000,   note:"20%"},
    {sec:2,title:"Mortgage Amount", price:1000000,  note:"If applicable"},
  ],
  "card4":[
    {sec:1,title:"Property Taxes",              price:1250   },
    {sec:1,title:"Homeowners' Association Fee", price:300},
    {sec:2,title:"Mortgage Payment",            price:"Varies based on terms and interest rate",   note:"If applicable"},
    {sec:2,title:"Property Insurance",          price:100,  note:"Approximate monthly cost"},
  ]

}

const Price = () => {

  const theme = useTheme();

  const {key,title,content} = useSelector((state: RootState) => getSingleTitle(state, "property_detail_pricing"));

  return  <Container className="flex flex-col cp-gap-y-2">
    <HEADER title={title} content={content} parentClass="md:col-span-2 grid-cols-4 gap-y-[14px]"  />
    <div className="flex flex-col gap-y-[40px] lg:gap-y-[50px]">
      <div className="flex flex-col md:flex-row items-left md:items-center p-[24px] lg:px-[50px] lg:py-[30px] xl:px-[50px] xl:py-[30px] gap-y-[10px] gap-x-[16px] lg:gap-x-[20px] cp-color-2 rounded-[8px] lg:rounded-[12px]">
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
          <CARD7 title={"Additional Fees"}      cardData={CardData.card1} />
          <CARD7 title={"Monthly Costs"}        cardData={CardData.card2} />
          <CARD7 title={"Total Initial Costs"}  cardData={CardData.card3} />
          <CARD7 title={"Monthly Expenses"}     cardData={CardData.card4} />
        </div>
      </div>
      
    </div>
  </Container>
}
export default Price