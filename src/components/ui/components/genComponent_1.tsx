import styled,{ useTheme } from "styled-components";

import TEXT_1   from "../elements/TEXT"
import BUTTON   from "../elements/BUTTON"

const Container = styled.div`${({theme}) => ``}`;

interface ComponentType {
    title:string;
    content:string;
    buttonText:string;
    parentClass?:string;
    buttonClass?:string;

}
export default ({title,content,buttonText,parentClass="py-[100px] px-[162px] border-y border-gray-1",buttonClass="bg-purple-1"}:ComponentType) => {
    const theme = useTheme();
    return (
        <Container className={`grid grid-rows-2 grid-flow-col md:gap-x-[150] lg:gap-x-[200px] ${parentClass}`}>
            <TEXT_1 text={title}   className="text-left"  />
            <TEXT_1 text={content} className="text-left" responsive="set2" color={theme.colors.gray1} fontWeight={500}  />
            <div className="row-span-2 items-end  justify-end hidden md:flex">
                <BUTTON type="button" text={buttonText} className={`py-[18px] px-[24px] rounded-[10px] ${buttonClass}`} 
                />
            </div>        
        </Container>
    );
};