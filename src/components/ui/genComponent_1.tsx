import styled,{ useTheme } from "styled-components";

import TEXT_1 from "./TEXT_ELEMENT"
import BUTTON from "./BUTTON"

const Container = styled.div``;

export default ({text_1,text_2,buttonText}:{[key: string]:string}) => {
    const theme = useTheme();
    return (
        <Container className="grid grid-rows-2 grid-flow-col">
            <TEXT_1 text={text_1}  />
            <TEXT_1 text={text_2} fontSize={"18px"} color={theme.colors.gray1} fontWeight={500}  />

            <div className="row-span-2 flex items-center justify-end ml-24">
                <BUTTON 
                  type="button" text={buttonText}
                  className="buttonStyle py-[18px] px-[24px] rounded-[10px] bg-purple-1" 
                />
            </div>        
        </Container>
    );
};