
import {TEXT,IMAGE}     from "../ui/elements"

const Social = () => {
    const TEXT_PARAM ={fontWeight:500}
    return (
        <div  className='grid grid-cols-1 justify-items-center gap-y-[15px] md:flex md:flex-wrap md:justify-start md:items-center  md:gap-x-[20px] lg:gap-x-[38px] bg-gray-1 px-[16px] py-[20px] md:py-[16px] md:px-[60px] lg:px-[80px] xl:px-[160px]'>
            
            <TEXT {...TEXT_PARAM} responsive="set2" text={`@${new Date().getFullYear()} Estatein. All Rights Reserved.`}  />
            <TEXT {...TEXT_PARAM} responsive="set2" text={`Terms & Conditions`} />
            <div className='-order-1 md:order-last md:ml-auto grid grid-flow-col gap-x-[10px] py-[10px]'>
                {["facebook.svg","linkedin.svg","x.svg","youtube.svg"].map(icon=><button className="bg-gray-2 p-[20px] md:p-[10px] lg:p-[14px] rounded-[58px]" >
                    <IMAGE responsive="set4" path={`/image/general/social/${icon}`} activeBorder={false} />
                </button>)}
            </div>
            
        </div>
    )
}
export default Social