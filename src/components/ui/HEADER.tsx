import React               from "react";
import styled,{ useTheme } from "styled-components";

import { HEADER_TYPE_2 } from '../../utility/typeApp';


import TEXT_1 from "./TEXT"

interface COM_TYPE extends HEADER_TYPE_2 {
  backgroundStyle?:any
}

const HEADER= ({title,content,parentClass="",backgroundStyle=styled.div``}:COM_TYPE) => {

    const MainWrapper=styled(backgroundStyle)``
    const theme = useTheme();
    return (
      <MainWrapper className={` grid content-start grid-flow-row grid-cols-5 ${parentClass}`} >
            <TEXT_1 text={title}   className="text-left col-start-1 col-span-4" />
            <TEXT_1 text={content} className="text-left col-start-1 col-span-4" fontSize={"18px"} color={theme.colors.gray1} fontWeight={500}  />
      </MainWrapper>
    );
};
export default HEADER;