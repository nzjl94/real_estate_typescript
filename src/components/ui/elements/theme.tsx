import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    transparent: 'transparent',
    current: 'currentColor',
    white: "#FFF",
    black: "#000",
    gray1: "#999",
    gray2: "#262626",
    gray3: "#191919",
    gray4: "#141414",
    gray5: "#1A1A1A",
    gray6: "#666",
    purple1:"#703BF7",
    'cgray': {
      100: '#666',
      200: '#a5f3fc',
      300: '#67e8f9',
      400: '#22d3ee',
      500: '#06b6d4',
      600: '#0891b2',
      700: '#0e7490',
      800: '#155e75',
      900: '#164e63',
    },
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
      header:{
        xxs:"12px",
        xs:"18px",
        s:"24px",
        m:"36px",
        l:"48px",
        xl:"60px",
        xxl:"72px"
    }
  },
  fontWeight:{
    s:400,
    m:500,
    l:600,
    xl:700
  },
  fontStyle: {
    n:"normal"
  },
  lineHeight:{
    s:"50%",
    m:"100%",
    l:"150%",
    xl:"200%"
  },
};
interface Props {
    children?: ReactNode
}
export default ({ children, ...props }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

