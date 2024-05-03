import React, {FC}  from 'react';
import IMG                  from "../elements/IMAGE";


// WrappedComponent: contain the child component
const STAR= <P,>(WrappedComponent: React.ComponentType<P>) => {


  const ComponentWithExtraInfo:FC<P & {starClass: string;}>= (props) => {
    const {starClass}=props
    return <div className='relative'>
      <div className={`absolute ${starClass} grid grid-flow-row grid-cols-3 gap-x-[6px] place-items-center`}>
          <IMG width={30} height={30}   activeBorder={false} path="/image/general/star1.svg"/>
          <IMG width={18} height={18}   activeBorder={false} path="/image/general/star2.svg"/>
          <IMG width={8.4} height={8.4} activeBorder={false} path="/image/general/star3.svg"/>
      </div>
      <WrappedComponent {...props}  parentClass="60px" />
    </div>
  };

  return ComponentWithExtraInfo;
}

export default STAR