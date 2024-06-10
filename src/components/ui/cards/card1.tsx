import {TEXT_STYLE_3,API_DATA_5}    from '../../../utility/types/typeApp';
import styled,{ useTheme }          from "styled-components"
import {TEXT,IMAGE}                 from "../elements"
import {CardStyle1}                 from "../../../utility/types/styleApp"

interface COMPONET_TYPE extends API_DATA_5{
    index:number;
    background?:string;
}
const Item = styled(CardStyle1)<TEXT_STYLE_3>`${({theme,background}) => `
    background: ${background!==undefined?background:theme.colors.gray5};
`}`;

const CARD1 = ({index,icon,title,text,background}:COMPONET_TYPE) => {
    const theme = useTheme();
    
    const TEXT_STYLE={
        fontWeight:theme.fontWeight.m,
        color:theme.colors.gray1
    }
    return <Item key={index} className='flex flex-col justify-start items-start gap-y-[16px] lg:gap-y-[24px] xl:gap-y-[30px] p-[24px] md:p-[30px] lg:p-[40px] xl:p-[50px]' background={background} >
        <div className="flex gap-x-[12px] self-start items-center md:gap-x-[14px] lg:gap-x-[16px] xl:gap-x-[20px]">
            <IMAGE responsive='set1' path={icon} activeBorder={true} />
            <TEXT className='text-left' text={title} responsive='set7' />
        </div>
        <TEXT className='text-left' text={text} responsive='set12' {...TEXT_STYLE} />
    </Item>
}

export default CARD1