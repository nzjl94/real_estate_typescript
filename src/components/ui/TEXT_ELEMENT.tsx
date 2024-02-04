import React, {useState} from "react";
import styled,{ useTheme ,DefaultTheme} from "styled-components";

interface TEXT_STYLE {
    theme:DefaultTheme,
    fontSize?: string,
    fontStyle?: string,
    fontWeight?: string|number,
    lineHeight?: string,
    color?: string
}

const Element = styled.h1<TEXT_STYLE>`${({theme,fontSize,fontStyle,fontWeight,lineHeight,color}) => `
    font-size:   ${fontSize   !== undefined?fontSize:theme.fontSizes.header.l};
    font-style:  ${fontStyle  !== undefined?fontStyle:theme.fontStyle.n};
    font-weight: ${fontWeight !== undefined?fontWeight:theme.fontWeight.l};
    line-height: ${lineHeight !== undefined?lineHeight:theme.lineHeight.l};
    color: ${color !== undefined?color:theme.colors.white};
`}`;

interface Props {
    text?: string,
    fontSize?: string,
    fontStyle?: string,
    fontWeight?: string|number,
    lineHeight?: string,
    color?: string,
    className?: string
}

export default ({text,fontSize,fontStyle,fontWeight,lineHeight,color,className=""}: Props) => (
    <Element fontSize={fontSize} fontStyle={fontStyle} fontWeight={fontWeight} lineHeight={lineHeight} color={color} className={className}>
        {text}
    </Element>
);
