import styled           from "styled-components";
import {STAR,HEADER}    from "../ui/components/"


const Search = () => {

    const data ={
        title:"Find Your Dream Property",
        content:"Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey ",
    }
    const Container = styled.div`${({theme}) => ``}`;

    
    const HEADER_WITH_STAR = STAR(HEADER);

    return <Container className='px-[16px] lg:px-[80px] xl:px-[160px] py-[75px] relative'>

        <HEADER_WITH_STAR title={data.title} content={data.content} starClass={"-top-[45px] -left-[30px]"} />
    </Container>
}

export default Search