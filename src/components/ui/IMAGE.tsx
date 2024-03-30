import styled from "styled-components";
import {IMAGE_TYPE,IMAGE_TYPE_2} from '../../utility/typeApp';

const MainWrapper=styled.div<IMAGE_TYPE>`
    ${({ activeBorder }) => activeBorder && `
        border-radius: 50%;
        border: 1px solid var(--Purple-60, #703BF7);
        padding: 20px;
    `}
`;
const IMAGE= ({width,height,path,activeBorder=true,parentClass=""}: IMAGE_TYPE_2) => {
    return (<>
        <MainWrapper className={parentClass} activeBorder={activeBorder}>
            <img 
                src={path} alt="Vercel Logo" className="image" width={width}  height={height}  
            />
        </MainWrapper>
    </>);
};
export default IMAGE;