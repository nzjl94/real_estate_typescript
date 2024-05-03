import React, { useState,FC}  from 'react';
import IMG                  from "../elements/IMAGE";


interface StarType {
  starClass: string;
  title:string;
  content:string;
};

const STAR = <P extends StarType>(WrappedComponent: React.ComponentType<Omit<P,"starClass"> & {parentClass:string}>) => {

  const ComponentWithExtraInfo:FC<P>= (props) => {
    const {starClass}=props
    return <>
      <div className={`absolute ${starClass} grid grid-flow-row grid-cols-3 gap-x-[6px] place-items-center`}>
          <IMG width={30} height={30}   activeBorder={false} path="/image/general/star1.svg"/>
          <IMG width={18} height={18}   activeBorder={false} path="/image/general/star2.svg"/>
          <IMG width={8.4} height={8.4} activeBorder={false} path="/image/general/star3.svg"/>
      </div>
      <WrappedComponent {...props}  parentClass="60px" />
    </>
  };

  return ComponentWithExtraInfo;
}

export default STAR


function withLoading<P extends object>(WrappedComponent: React.ComponentType<P>): React.FC<P & { isLoading: boolean }> {

  const WithLoading: React.FC<P & { isLoading: boolean }> = ({ isLoading, ...props }: { isLoading: boolean } & P) => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...props as P} />;
  };
  
  return WithLoading;
}


interface FooProps {
  foo: string;
}
export const withFoo = <Props extends FooProps>(Component: React.ComponentType<Props>): React.ComponentType<Omit<Props, keyof FooProps>> => props => {
    return <Component {...props as Props} foo="foo" />
}