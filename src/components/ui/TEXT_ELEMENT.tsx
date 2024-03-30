import styled from "styled-components";
import { TEXT_STYLE,TEXT_PROPS_STYLE} from '../../utility/typeApp';


const Element = styled.h1<TEXT_STYLE>`${({theme,fontSize,fontStyle,fontWeight,lineHeight,color}) => `
    font-size:   ${fontSize   !== undefined?fontSize:theme.fontSizes.header.l};
    font-style:  ${fontStyle  !== undefined?fontStyle:theme.fontStyle.n};
    font-weight: ${fontWeight !== undefined?fontWeight:theme.fontWeight.l};
    line-height: ${lineHeight !== undefined?lineHeight:theme.lineHeight.l};
    color: ${color !== undefined?color:theme.colors.white};
`}`;


export default ({text,fontSize,fontStyle,fontWeight,lineHeight,color,className=""}: TEXT_PROPS_STYLE) => (
    <Element fontSize={fontSize} fontStyle={fontStyle} fontWeight={fontWeight} lineHeight={lineHeight} color={color} className={className}>
        {text}
    </Element>
);
