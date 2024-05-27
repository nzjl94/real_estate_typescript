import styled,{ useTheme }    from "styled-components";

import {HEADER}                 from "../ui/components";
import TEXT                   from "../ui/elements/TEXT"
import useFetch, {FetchData}  from '../../utility/customHook/useGetAPI';

import {API_DATA_6}           from '../../utility/types/typeApp';

import { useSelector }	      from 'react-redux';
import { RootState } 		    	from '../../store/Reducer';
import {getSingleTitle} 	    from '../../store/slice/title';

const Container = styled.div``;
const TextContainer = styled.div`${({theme}) => `
    box-shadow: 0px 0px 0px 8px ${theme.colors.gray3};
`}`;

export default () => {

  const theme = useTheme();
  const { data,success}: FetchData<API_DATA_6> = useFetch <API_DATA_6>('about/achievement',[]);
  const {key,title,content} = useSelector((state: RootState) => getSingleTitle(state, "about_achievement"));

  return (
    <Container className="grid flex-col gap-10">
      <HEADER title={title} content={content} />
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