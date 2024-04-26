import React from 'react'
import IMG  from "../elements/IMAGE";


const STAR = ({parentClass="60px"}:{parentClass:string}) => {
  return <div className={`absolute ${parentClass} grid grid-flow-row grid-cols-3 gap-x-[6px] place-items-center`}>
    <IMG width={30} height={30} activeBorder={false} path="/image/general/star1.svg"/>
    <IMG width={18} height={18} activeBorder={false} path="/image/general/star2.svg"/>
    <IMG width={8.4} height={8.4} activeBorder={false} path="/image/general/star3.svg"/>
</div>
}

export default STAR