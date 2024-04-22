import styled,{ useTheme } from "styled-components";

import TEXT_1 from "./TEXT"
import BUTTON from "./BUTTON"

const Container = styled.div`
    padding: 100px 162px;
    border-top: 1px solid var(--Grey-15, #262626);
    border-bottom: 1px solid var(--Grey-15, #262626);
`;

export default ({text_1,text_2,buttonText}:{[key: string]:string}) => {
    const theme = useTheme();
    return (
        <Container className="grid grid-rows-2 grid-flow-col gap-x-[250px]">
            <TEXT_1 text={text_1} className="text-left"  />
            <TEXT_1 text={text_2} className="text-left" fontSize={"18px"} color={theme.colors.gray1} fontWeight={500}  />

            <div className="row-span-2 flex items-center justify-end">
                <BUTTON 
                  type="button" text={buttonText}
                  className="buttonStyle py-[18px] px-[24px] rounded-[10px] bg-purple-1" 
                />
            </div>        
        </Container>
    );
};