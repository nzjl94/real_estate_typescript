import styled from "styled-components";
import {IMAGE_TYPE,IMAGE_TYPE_2} from '../../../utility/typeApp';


const MainWrapperBase = styled.div `
    .pag-button-normal {
        filter: invert(0);
    }
    .pag-button-disable {
        filter: invert(0.5);
    }
`
const MainWrapper=styled(MainWrapperBase)<IMAGE_TYPE>`
    ${({ activeBorder }) => activeBorder ? `
        border-radius: 50%;
        border: 1px solid var(--Purple-60, #703BF7);
        padding: 14px;
    `:``
    }
`;

const Image=styled.img``


const IMAGE= ({width,height,path,activeBorder=true,parentClass="w-fit",eleClass=""}: IMAGE_TYPE_2) => {
    return (<>
        <MainWrapper className={parentClass} activeBorder={activeBorder}>
            <Image src={path} alt="Vercel Logo" className={`image ${eleClass}`} width={width}  height={height} />
        </MainWrapper>
    </>);
};
export default IMAGE;