import styled,{ useTheme } from "styled-components";

import TEXT_1   from "../elements/TEXT"
import BUTTON   from "../elements/BUTTON"

import {Card6Type}    from '../../../utility/types/typeApp';

import useScreenSize  from '../../../utility/customHook/useScreenSize';


const Container = styled.div`${({theme}) => ``}`;


const CARD: React.FC<Card6Type>=({title,content,buttonText,showButton=false,parentClass="px-[16px] py-[50px] lg:py-[100px] lg:px-[162px] border-y border-gray-1",buttonClass="bg-purple-1"}) => {
    const theme = useTheme();
    const {screenSize,screenLen:_}        = useScreenSize();

    return (
        <Container className={`grid ${(showButton && screenSize==="sm")?"grid-flow-row":"grid-rows-2 grid-flow-col"} md:gap-x-[150] lg:gap-x-[200px] ${parentClass}`}>
            <TEXT_1 text={title}   className="text-left"  />
            <TEXT_1 text={content} className="text-left" responsive="set2" color={theme.colors.gray1} fontWeight={500}  />
            <div className={`row-span-2 items-end  justify-end ${showButton?"mt-[30px]":"hidden md:flex"}`}>
                <BUTTON 
                    type="button" text={buttonText} 
                    className={`py-[18px] px-[24px] rounded-[10px] ${buttonClass} ${showButton && "w-full text-right"}`} 
                    {...(showButton && {textClass:"text-center"})} 
                />
            </div>        
        </Container>
    );
};
export default CARD;