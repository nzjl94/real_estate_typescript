import { useState}            from "react";
import styled,{ useTheme }    from "styled-components";

import HEADER                 from "../ui/components/HEADER";
import TEXT                 from "../ui/elements/TEXT"
import useFetch, {FetchData}  from '../../utility/customHook/API';

const Container = styled.div``;
const TextContainer = styled.div`${({theme}) => `
    box-shadow: 0px 0px 0px 8px ${theme.colors.gray3};
`}`;

export default () => {

  const theme = useTheme();
  const { data,success}: FetchData<[]> = useFetch <[]>('realestate/about/achievement',[]);

  const [headerData, setDeaderData] = useState({
    title:"Our Achievements",
    content:"Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
  })

  return (
    <Container className="grid flex-col gap-10">
      <HEADER title={headerData.title} content={headerData.content} />
        <div className="grid grid-flow-row grid-cols-3 gap-x-[40px]">
            {data.map(({title,content},index) => {
              return (
                <TextContainer key={index} className=" grid grid-flow-row gap-y-[30px] p-[50px] rounded-[12px] border-[1px] border-gray-1 bg-gray-2">
                    <TEXT text={title}   fontSize={"30px"} />
                    <TEXT text={content} fontSize={"18px"} color={theme.colors.gray1} fontWeight={500} />
                </TextContainer>
              );
            })}
        </div>
    </Container>
  );
};