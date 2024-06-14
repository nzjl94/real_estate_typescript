import {
	getSingleTitle,useSelector,useFetch,FetchData,
	useTheme,styled,RootState,HEADER,TEXT,STAR
} 								            from "./header"
import {API_DATA_6}           from '../../utility/types/typeApp';
import useScreenSize          from '../../utility/customHook/useScreenSize';
import {DefaultTheme}         from "styled-components";

const TextContainer = styled.div<{theme:DefaultTheme,screenSize:string}>`${({theme,screenSize}) => `
    box-shadow: 0px 0px 0px ${screenSize=="sm"?4:screenSize=="md"?6:8}px ${theme.colors.gray3};
`}`;

const Achievement=() => {

  const {screenSize,screenLen:_} = useScreenSize();
  const theme = useTheme();
  const { data,success}: FetchData<API_DATA_6> = useFetch <API_DATA_6>('about/achievement',[]);
  const {key,title,content} = useSelector((state: RootState) => getSingleTitle(state, "about_achievement"));
  const HEADER_WITH_STAR = STAR(HEADER);

  return (
    <div className="flex flex-col cp-gap-y-2">
      <HEADER_WITH_STAR title={title} content={content} />

      <div className="flex flex-col md:flex-row gap-y-[20px] md:gap-x-[30px] xl:gap-x-[40px]">
          {data.map(({title,content},index) => {
            return (
              <TextContainer key={index} className="flex flex-col cp-gap-y-6 cp-pd-1 rounded-[12px] cp-color-1" screenSize={screenSize}>
                  <TEXT text={title}   responsive="set9" />
                  <TEXT text={content} responsive="set2" color={theme.colors.gray1} fontWeight={500} />
              </TextContainer>
            );
          })}
      </div>
    </div>
  );
};
export default Achievement;