import { useState}            from "react";
import styled,{ useTheme }    from "styled-components";

import HEADER                 from "../ui/components/HEADER";
import TEXT_1                 from "../ui/elements/TEXT"
import useFetch, {FetchData}  from '../../utility/customHook/useGetAPI';

const ExperienceContainer=styled.div``;
const ElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;

  .custom2 {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex-grow: 1;
    border-radius: 0px 12px 12px 12px;
    border: 1px solid #262626;
    background: linear-gradient(121deg, #703BF7 -49.01%, rgba(112, 59, 247, 0.00) 13.65%);
  }
`;
const Experience = () => {
  const { data,success}: FetchData<[]> = useFetch <[]>('realestate/about/experience',[]);

  const [headerData, setDeaderData] = useState({
    title:"Navigating the Estatein Experience",
    content:"At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works."
  })
  const theme = useTheme();


  return (
    <ExperienceContainer className="grid flex-col gap-10">
      <HEADER title={headerData.title} content={headerData.content} />
      <div className="grid grid-flow-row grid-cols-3  gap-5 items-stretch">
        {data.map(({m_title,s_title,content},index) => {
          return (
            <ElementWrapper key={index} style={{}}>
              <TEXT_1 text={m_title} fontSize={"20px"} fontWeight={500} className="py-[16px] px-[20px] border-l-[1px] border-purple-1" />
              <div className="custom2 p-[50px]">
                <TEXT_1 text={s_title} fontSize={"26px"} />
                <TEXT_1 text={content} fontSize={"18px"} color={theme.colors.gray1} fontWeight={500}  />
              </div>
            </ElementWrapper>
          );
        })}
      </div>
    </ExperienceContainer>
  );
};
export default Experience;