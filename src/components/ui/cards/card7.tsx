import styled,{ useTheme,DefaultTheme}  from "styled-components";
import {TEXT,BUTTON}                    from "../elements"


const Container = styled.div`${({theme}) => ``}`;

interface CART7_ROW_TYPE {
    sec:number;
    title:string;
    price:number|string;
    note?:string
}
interface CART7_TYPE {
    title:string;
    cardData:CART7_ROW_TYPE[]
}
const generateRow = (theme:DefaultTheme,data:CART7_ROW_TYPE[])=>{
    const generateCell = ({title,price,note,sec}:CART7_ROW_TYPE)=>{
        let priceType= typeof(price)=="string"
        return <div className="flex flex-col gap-y-[10px] md:gap-y-[12px] lg:gap-y-[14px] xl:gap-y-[16px]">
            <TEXT text={title} color={theme.colors.gray1} responsive="set12" fontWeight={500} />
            <div className="flex items-center gap-x-[12px] lg:gap-x-[16px]">
                <TEXT text={priceType?price.toString():"$"+price.toString()} fontWeight={priceType?400:600} responsive={priceType?"set13":"set7"} />
                {note!==undefined && <div className="bg-gray-1 border border-gray-1 rounded-[28px] py-[6px] px-[12px] lg:py-[8px] lg:px-[14px]">
                    <TEXT text={note} color={theme.colors.gray1} responsive="set13" fontWeight={500} />
                </div>}
            </div>
        </div>
    }
    let columnLen=data.length===2
    return <div className={`grid grid-flow-row md:grid-flow-col ${columnLen?"md:grid-cols-[45%,1%,auto]":"md:grid-cols-1"} gap-y-[20px] md:gap-x-[20px]`}>
        {generateCell(data[0])}
        {columnLen && <div className="bg-gray-5 w-full h-[1px] md:w-[1px] md:h-full"></div>}
        {columnLen && generateCell(data[1])}
    </div>
}
const CARD7:React.FC<CART7_TYPE>=({title,cardData}) => {
    const theme = useTheme();

    let sec1_Data=cardData.filter(({sec})=>sec===1);
    let sec2_Data=cardData.filter(({sec})=>sec===2);
    let sec3_Data=cardData.filter(({sec})=>sec===3);
    
    return <Container className={`flex flex-col gap-y-[20px] md:gap-y-[30px] lg:gap-y-[40px] p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px] border border-gray-1 rounded-[12px]`}>
            <div className="flex justify-between items-center">
                <TEXT text={title} className="align-middle" responsive="set7" />
                <BUTTON 
                    type="button" text="Learn More" 
                    className={`py-[18px] px-[24px] rounded-[10px] bg-gray-1 items-center`} 
                />
            </div>
            <div className="h-[1px] w-full bg-gray-5"></div>
            {generateRow(theme,sec1_Data)}
            <div className="h-[1px] w-full bg-gray-5"></div>
            {generateRow(theme,sec2_Data)}
            {
                sec3_Data.length>0 && <>
                    <div className="h-[1px] w-full bg-gray-5"></div> 
                    {generateRow(theme,sec3_Data)}
                </>
            }
            
            
    </Container>
};
export default CARD7;