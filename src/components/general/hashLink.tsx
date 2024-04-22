import {useEffect ,useRef} from "react";
import { useLocation } from "react-router-dom";
const ScrollToHashElement = () => {
    const location = useLocation();
    const lastHash = useRef('');

    // listen to location change using useEffect with location as dependency
    useEffect(() => {
        if (location.hash) {
            lastHash.current = location.hash.slice(1); 
        }
        if (lastHash.current && document.getElementById(lastHash.current)) {
            setTimeout(() => {
                document.getElementById(lastHash.current)?.scrollIntoView({
                    behavior: 'smooth', 
                    // block: 'start' ,
                    inline: "nearest"
                });
                lastHash.current = '';
            }, 100);
        }
    }, [location]);

    return null;
};
export default ScrollToHashElement;