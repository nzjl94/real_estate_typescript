import styled                   from "styled-components";

import {STAR,HEADER}            from "../ui/components/"

const Request = () => {
    
    const data ={
        title:"Let's Make it Happen",
        content:"Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."
    }
    const Container = styled.div`${({theme}) => ``}`;

    const HEADER_WITH_STAR = STAR(HEADER);
    
    return <Container className='flex flex-col gap-y-[40px] md:gap-y-[60px] lg:gap-y-[80px] px-[16px] lg:px-[80px] xl:px-[160px] py-[75px] relative'>

        <HEADER_WITH_STAR title={data.title} content={data.content} starClass={"-top-[45px] -left-[30px]"} />
    </Container>  
}
export default Request