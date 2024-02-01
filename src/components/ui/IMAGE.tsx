"use client";

import styled from "styled-components";
import PropTypes from 'prop-types'


interface IMAGE_STYLE {
    activeBorder:boolean
}

const MainWrapper=styled.div<IMAGE_STYLE>`
    ${({ activeBorder }) => activeBorder && `
        border-radius: 50%;
        border: 1px solid var(--Purple-60, #703BF7);
        padding: 20px;
    `}
`;

interface IMG_PROPS {
    width?: number,
    height?: number,
    path?: string,
    activeBorder?: boolean,
    parentClass?: string
}

export default ({width,height,path,activeBorder=true,parentClass=""}: IMG_PROPS) => {
    return (<>
        <MainWrapper className={parentClass} activeBorder={activeBorder}>
            <img 
                src={path} 
                alt="Vercel Logo" 
                className="image" 
                width={width} 
                height={height}  
            />
        </MainWrapper>
    </>);
};