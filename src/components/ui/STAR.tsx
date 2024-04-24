import React from 'react'
import IMG  from "./IMAGE";


const STAR = ({left,top}:{left:string,top:string}) => {
  return <div className={`absolute top-[${top}] left-[${left}] grid grid-flow-row grid-cols-3 gap-x-[6px] place-items-center`}>
    <IMG width={30} height={30} activeBorder={false} path="/image/general/star1.svg"/>
    <IMG width={18} height={18} activeBorder={false} path="/image/general/star2.svg"/>
    <IMG width={8.4} height={8.4} activeBorder={false} path="/image/general/star3.svg"/>
</div>
}

export default STAR