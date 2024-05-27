import { useState}            from "react";
import styled,{ useTheme }    from "styled-components";

import HEADER                 from "../ui/components/HEADER";
import TEXT_1                 from "../ui/elements/TEXT"
import useFetch, {FetchData}  from '../../utility/customHook/useGetAPI';

import { useSelector }	      from 'react-redux';
import { RootState } 		    	from '../../store/Reducer';
import {getSingleTitle} 	    from '../../store/slice/title';

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
  const { data,success}: FetchData<[]> = useFetch <[]>('about/experience',[]);

  const {key,title,content} = useSelector((state: RootState) => getSingleTitle(state, "about_experience"));


  const theme = useTheme();


  return (
    <ExperienceContainer className="grid flex-col gap-10">
      <HEADER title={title} content={content} />
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