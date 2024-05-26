import React    from 'react'
import styled   from "styled-components";

import TEXT     from "../ui/elements/TEXT"
import IMG      from "../ui/elements/IMAGE"

const Container = styled.div `
    background: var(--Grey-10, #1A1A1A);
    .pag-buttons{
        background: var(--Grey-08, #141414);
        border-radius: 58px;
        padding: 14px;
    }
`
const Social = () => {
    const TEXT_PARAM ={fontSize:"18px",fontWeight:500}
    return (
        <Container  className='grid grid-flow-col px-[162px] py-[16px] w-full justify-between'>
            <div className='grid grid-flow-col gap-x-[38px] py-[10px] place-items-center' >
                <TEXT {...TEXT_PARAM} text={`@${new Date().getFullYear()} Estatein. All Rights Reserved.`}  />
                <TEXT {...TEXT_PARAM} text={`Terms & Conditions`}                       />
            </div>
            <div className='grid grid-flow-col gap-x-[10px] py-[10px]'>
                <button className="pag-buttons" >
                    <IMG width={24} height={24} path="/image/general/social/facebook.svg" activeBorder={false} />
                </button>
                <button className="pag-buttons" >
                    <IMG width={24} height={24} path="/image/general/social/linkedin.svg" activeBorder={false} />
                </button>
                <button className="pag-buttons" >
                    <IMG width={24} height={24} path="/image/general/social/x.svg" activeBorder={false} />
                </button>
                <button className="pag-buttons" >
                    <IMG width={24} height={24} path="/image/general/social/youtube.svg" activeBorder={false} />
                </button>
            </div>
        </Container>
    )
}
export default Social