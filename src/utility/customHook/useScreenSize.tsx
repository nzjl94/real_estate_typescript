import { useState, useEffect } from 'react';

const useScreenSize = () => {

  const [screenLen, setScreenLen] = useState({width: window.innerWidth,height: window.innerHeight});
  const [screenSize,setScreenSize]=useState("xl2")

  useEffect(() => {
    const handleResize = () => {
        setScreenLen({width: window.innerWidth,height: window.innerHeight});

        if(window.innerWidth>1536){
            setScreenSize("xl2")
        }else if(window.innerWidth>1280){
            setScreenSize("xl")
        }else if(window.innerWidth>1024){
            setScreenSize("lg")
        }else if(window.innerWidth>768){
            setScreenSize("md")
        }else{
            setScreenSize("sm")
        }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {screenSize,screenLen};
};
export default useScreenSize;