"use client";

import React               from "react";
import styled,{ useTheme } from "styled-components";

import TEXT_1 from "./TEXT_ELEMENT"

const MainWrapper=styled.div``;

interface HEADER_PROPS {
  [key: string]:string
}
const HEADER= ({title,content,parentClass=""}:HEADER_PROPS) => {
    const theme = useTheme();
    return (
      <MainWrapper className={parentClass} >
            <TEXT_1 text={title} />
            <TEXT_1 text={content} fontSize={"18px"} color={theme.colors.gray1} fontWeight={500}  />
      </MainWrapper>
    );
};
export default HEADER;