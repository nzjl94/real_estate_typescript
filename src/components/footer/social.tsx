
import {TEXT,IMAGE}     from "../ui/elements"

const Social = () => {
    const TEXT_PARAM ={fontSize:"18px",fontWeight:500}
    return (
        <div  className='grid grid-flow-col px-[162px] py-[16px] w-full justify-between bg-gray-1'>
            <div className='grid grid-flow-col gap-x-[38px] py-[10px] place-items-center' >
                <TEXT {...TEXT_PARAM} text={`@${new Date().getFullYear()} Estatein. All Rights Reserved.`}  />
                <TEXT {...TEXT_PARAM} text={`Terms & Conditions`}                       />
            </div>
            <div className='grid grid-flow-col gap-x-[10px] py-[10px]'>
                {["facebook.svg","linkedin.svg","x.svg","youtube.svg"].map(icon=><button className="bg-gray-2 p-[14px] rounded-[58px]" >
                    <IMAGE width={24} height={24} path={`/image/general/social/${icon}`} activeBorder={false} />
                </button>)}
            </div>
        </div>
    )
}
export default Social