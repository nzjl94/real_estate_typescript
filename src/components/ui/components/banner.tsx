import styled,{ useTheme }  from "styled-components"
import {CardStyle1}         from "../../../utility/types/styleApp"
import {TEXT,IMAGE}              from "../elements";


const Container = styled(CardStyle1)`${({theme}) => `
    border-radius: 0px;
`}`;

const Banner = () => {
    const theme = useTheme();

    return <Container className='flex justify-center gap-x-[10px] px-[16px] lg:px-[80px] xl:px-[160px] py-[14px] lg:py-[16px] border-1'>
        <TEXT className='' responsive="set2" text={"✨Discover Your Dream Property with Estatein"} />  
        <TEXT className='' responsive="set2" text={"Learn More"} />  
        <button className="ml-auto bg-gray-3 p-[10px] rounded-[50%] bg-opacity-50" >
            <IMAGE  responsive="set2" activeBorder={false} parentClass="w-fit" path="/image/general/close.svg" />
        </button>
      
    </Container>
}

export default Banner