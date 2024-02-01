import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    white: "#FFF",
    black: "#000",
    gray1: "#999",
    gray2: "#262626",
    gray3: "#191919",
    purple1:"#703BF7"
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    header:{xxs:"12px",xs:"18px",s:"24px",m:"36px",l:"48px",xl:"60px",xxl:"72px"}
  },
  fontWeight:{s:400,m:500,l:600,xl:700},
  fontStyle: {
    n:"normal"
  },
  lineHeight:{
    s:"50%",m:"100%",l:"150%",xl:"200%"
  }

};
interface Props {
    children?: ReactNode
}
export default ({ children, ...props }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

