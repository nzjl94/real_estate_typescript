import React from 'react'

import styled    from "styled-components";


import Pagination from "./pagination";

const Property = () => {


    const Container = styled.div`${({theme}) => ``}`;
    
    return <Container className='px-[80px] py-[120px]'>
        <Pagination />
    </Container>
        
}
export default Property