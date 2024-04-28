import styled from "styled-components";
import {IMAGE_TYPE,IMAGE_TYPE_2} from '../../../utility/typeApp';
import {responsiveImageSet} from '../../../utility/responsiveApp';

// import { useMediaQuery } from 'react-responsive'

import useScreenSize from '../../../utility/customHook/useScreenSize';


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

const IMAGE:React.FC<IMAGE_TYPE_2>= ({width,height,path,activeBorder=true,responsive,parentClass="w-fit",eleClass=""}) => {
    const {screenSize,screenLen:_} = useScreenSize();

    let imgWidth,imgHeight
    if(responsive ===undefined){
        imgWidth=width
        imgHeight=height
    }else{
        imgWidth  = responsiveImageSet[responsive][screenSize][0]
        imgHeight = responsiveImageSet[responsive][screenSize][1]
    }
    return (<>
        <MainWrapper className={parentClass} activeBorder={activeBorder}>
            <Image 
                src={path} alt="Vercel Logo" className={`image ${eleClass}`} 
                width={imgWidth}  height={imgHeight} 
            />
        </MainWrapper>
    </>);
};
export default IMAGE;