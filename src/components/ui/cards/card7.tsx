import styled,{ useTheme,DefaultTheme}  from "styled-components";
import {TEXT,BUTTON}                    from "../elements"


const Container = styled.div`${({theme}) => ``}`;

interface CART7_TYPE {
    title:string;
}
const generateRow = (theme:DefaultTheme,numberCol:number=2,data:{[key:string]:string}[])=>{

    const generateCell = ({title,price,note}:{[key:string]:string})=>{
        return <div className="flex flex-col gap-y-[10px] md:gap-y-[12px] lg:gap-y-[14px] xl:gap-y-[16px]">
            <TEXT text={title} color={theme.colors.gray1} responsive="set12" fontWeight={500} />
            <div className="flex items-center gap-x-[12px] lg:gap-x-[16px]">
                <TEXT text={price} responsive="set7" />
                <div className="bg-gray-1 border border-gray-1 rounded-[28px] py-[6px] px-[12px] lg:py-[8px] lg:px-[14px]">
                    <TEXT text={note} color={theme.colors.gray1} responsive="set13" fontWeight={500} />
                </div>
            </div>
        </div>
    }
    return <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-[45%,1%,auto] gap-y-[20px] md:gap-x-[20px]">
        {generateCell(data[0])}
        {numberCol===2 && <div className="bg-gray-5 w-full h-[1px] md:w-[1px] md:h-full"></div>}
        {numberCol===2 && generateCell(data[0])}
    </div>
}
const CARD7:React.FC<CART7_TYPE>=({title}) => {
    const theme = useTheme();

    return <Container className={`flex flex-col gap-y-[20px] md:gap-y-[30px] lg:gap-y-[40px] p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px] border border-gray-1 rounded-[12px]`}>
            <div className="flex justify-between items-center">
                <TEXT text={title} className="align-middle" responsive="set7" />
                <BUTTON 
                    type="button" text="Learn More" 
                    className={`py-[18px] px-[24px] rounded-[10px] bg-gray-1 items-center`} 
                />
            </div>
            <div className="h-[1px] w-full bg-gray-5"></div>
            {generateRow(theme,2,[
                {title:"Property Transfer Tax",price:"$25,000",note:"Based on the sale price and local regulations"},
                {title:"Legal Fees",           price:"$3,000" ,note:"Approximate cost for legal services, including title transfer"},
            ])}
            <div className="h-[1px] w-full bg-gray-5"></div>
            {generateRow(theme,2,[
                {title:"Home Inspection",price:"$500",note:"Recommended for due diligence"},
                {title:"Property Insurance",           price:"$1,200" ,note:"Annual cost for comprehensive property insurance"},
            ])}
            <div className="h-[1px] w-full bg-gray-5"></div>
            {generateRow(theme,1,[{title:"Mortgage Fees",price:"Varies",note:"If applicable, consult with your lender for specific details"}])}
    </Container>
};
export default CARD7;