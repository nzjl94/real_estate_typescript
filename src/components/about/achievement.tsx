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
    <div className="flex flex-col gap-y-[40px] md:gap-y-[50px] lg:gap-y-[60px] xl:gap-y-[80px]">
      <HEADER_WITH_STAR title={title} content={content} />

      <div className="flex flex-col md:flex-row gap-y-[20px] md:gap-x-[30px] xl:gap-x-[40px]">
          {data.map(({title,content},index) => {
            return (
              <TextContainer key={index} className="flex flex-col gap-y-[16px] lg:gap-y-[24px] xl:gap-y-[30px] p-[30px] lg:p-[40px] xl:p-[50px] rounded-[12px] border-[1px] border-gray-1 bg-gray-2" screenSize={screenSize}>
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