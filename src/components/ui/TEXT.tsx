import styled from "styled-components";
import { TEXT_STYLE_1,TEXT_STYLE_2} from '../../utility/typeApp';

const Element = styled.h1<TEXT_STYLE_1>`${({theme,fontSize,fontStyle,fontWeight,lineHeight,color}) => {
    return Object.keys(theme).length>0 && `
        font-size:   ${fontSize   !== undefined?fontSize:theme.fontSizes.header.l};
        font-style:  ${fontStyle  !== undefined?fontStyle:theme.fontStyle.n};
        font-weight: ${fontWeight !== undefined?fontWeight:theme.fontWeight.l};
        line-height: ${lineHeight !== undefined?lineHeight:theme.lineHeight.l};
        color: ${color !== undefined?color:theme.colors.white};
    `
}}`;
export default ({text,fontSize,fontStyle,fontWeight,lineHeight,color,className="text-left"}: TEXT_STYLE_2) => (
    <Element 
        fontSize={fontSize} 
        fontStyle={fontStyle} 
        fontWeight={fontWeight} 
        lineHeight={lineHeight} 
        color={color} 
        className={className}
    >
        {text}
    </Element>
);
