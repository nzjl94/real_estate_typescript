import { useTheme }     from "styled-components";
import {TEXT,BUTTON}    from "../elements"
import {CARD6_TYPE}     from '../../../utility/types/typeApp';
import useScreenSize    from '../../../utility/customHook/useScreenSize';



const CARD: React.FC<CARD6_TYPE>=({title,content,buttonText,showButton=false,parentClass="px-[16px] py-[50px] lg:py-[100px] lg:px-[162px] border-y border-gray-1",buttonClass="bg-purple-1"}) => {
    const theme = useTheme();
    const {screenSize,screenLen:_}        = useScreenSize();

    return <div className={`grid ${(showButton && screenSize==="sm")?"grid-flow-row":"grid-rows-2 grid-flow-col"} md:gap-x-[150] lg:gap-x-[200px] ${parentClass}`}>
            <TEXT text={title}   className="text-left"  />
            <TEXT text={content} className="text-left" responsive="set2" color={theme.colors.gray1} fontWeight={500}  />
            <div className={`row-span-2 items-end  justify-end ${showButton?"mt-[30px]":"hidden md:flex"}`}>
                <BUTTON 
                    type="button" text={buttonText} 
                    className={`py-[18px] px-[24px] rounded-[10px] ${buttonClass} ${showButton && "w-full text-right"}`} 
                    {...(showButton && {textClass:"text-center"})} 
                />
            </div>        
        </div>
};
export default CARD;