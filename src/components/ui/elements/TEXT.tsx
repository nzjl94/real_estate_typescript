import styled from "styled-components";
import { TEXT_STYLE_1,TEXT_STYLE_2} from '../../../utility/typeApp';

import useScreenSize                from '../../../utility/customHook/useScreenSize';
import {responsiveTextSet}         from '../../../utility/responsiveApp';



const Element = styled.h1<TEXT_STYLE_1>`${({theme,fontSize,fontStyle,fontWeight,lineHeight,color}) => {
    return Object.keys(theme).length>0 && `
        font-size:   ${fontSize};
        font-style:  ${fontStyle  !== undefined?fontStyle:theme.fontStyle.n};
        font-weight: ${fontWeight !== undefined?fontWeight:theme.fontWeight.l};
        line-height: ${lineHeight !== undefined?lineHeight:theme.lineHeight.l};
        color: ${color !== undefined?color:theme.colors.white};
    `
}}`;
export default ({text,fontSize,fontStyle,fontWeight,lineHeight,color,className="text-left",responsive="set1"}: TEXT_STYLE_2) => {
    const {screenSize,screenLen:_} = useScreenSize();

    fontSize  =fontSize ===undefined ?responsiveTextSet[responsive][screenSize]:fontSize
    
    return <Element fontSize={fontSize} fontStyle={fontStyle} fontWeight={fontWeight} lineHeight={lineHeight} color={color} className={className}>
        {text}
    </Element>

}
    
    
