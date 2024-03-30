import React               from "react";
import styled,{ useTheme } from "styled-components";

import { HEADER_TYPE } from '../../utility/typeApp';


import TEXT_1 from "./TEXT_ELEMENT"

const MainWrapper=styled.div``;

const HEADER= ({title,content,parentClass=""}:HEADER_TYPE) => {
    const theme = useTheme();
    return (
      <MainWrapper className={parentClass} >
            <TEXT_1 text={title} />
            <TEXT_1 text={content} fontSize={"18px"} color={theme.colors.gray1} fontWeight={500}  />
      </MainWrapper>
    );
};
export default HEADER;