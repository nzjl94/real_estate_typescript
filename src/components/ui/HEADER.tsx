import React               from "react";
import styled,{ useTheme } from "styled-components";

import { HEADER_TYPE } from '../../utility/typeApp';


import TEXT_1 from "./TEXT"

const MainWrapper=styled.div`
  background: linear-gradient(96deg, #262626 -26.82%, rgba(38, 38, 38, 0.00) 40.46%);
  border-bottom: 1px solid var(--Grey-15, #262626);
`;

const HEADER= ({title,content,parentClass=""}:HEADER_TYPE) => {
    const theme = useTheme();
    return (
      <MainWrapper className={` grid content-start grid-flow-row grid-cols-5 ${parentClass}`} >
            <TEXT_1 text={title}   className="text-left col-start-1 col-span-4" />
            <TEXT_1 text={content} className="text-left col-start-1 col-span-4" fontSize={"18px"} color={theme.colors.gray1} fontWeight={500}  />
      </MainWrapper>
    );
};
export default HEADER;