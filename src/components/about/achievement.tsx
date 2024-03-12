import React, { useState, useEffect} from "react";
import styled,{ useTheme } from "styled-components";

import {getAPIData} from '../../utility/API'
import HEADER from "../ui/HEADER";
import TEXT_1 from "../ui/TEXT_ELEMENT"

const Container = styled.div``;
const TextContainer = styled.div`${({theme}) => `
    box-shadow: 0px 0px 0px 8px ${theme.colors.gray3};
`}`;

export default () => {

  const theme = useTheme();
  const [data, setData] = useState([])
  const [headerData, setDeaderData] = useState({
    title:"Our Achievements",
    content:"Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
  })
 
  useEffect( () => {
    getAPIData('realestate/about/achievement',setData)
  }, [])

  return (
    <Container className="grid flex-col gap-10">
      <HEADER title={headerData.title} content={headerData.content} />
        <div className="grid grid-flow-row grid-cols-3  gap-x-7">
            {data.map(({title,content},index) => {
              return (
                <TextContainer key={index} className="p-[30px] rounded-[12px] border-[1px] border-gray-1 bg-gray-2">
                    <TEXT_1 text={title}   fontSize={"30px"} />
                    <TEXT_1 text={content} fontSize={"18px"} color={theme.colors.gray1} fontWeight={500} />
                </TextContainer>
              );
            })}
        </div>
    </Container>
  );
};