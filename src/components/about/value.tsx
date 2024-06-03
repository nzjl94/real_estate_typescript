import {
	getSingleTitle,useSelector,useFetch,FetchData,
	useTheme,RootState,IMAGE,TEXT,styled,HEADER,STAR
} 								    from "./header"
import {API_DATA_6}   from '../../utility/types/typeApp';
import useScreenSize  from '../../utility/customHook/useScreenSize';
import {DefaultTheme} from "styled-components";

const Content=styled.div``;
const Container = styled.div<{theme:DefaultTheme,screenSize:string}>`${({theme,screenSize}) => `
  ${Content} {
    box-shadow: 0px 0px 0px ${screenSize=="sm"?6:screenSize=="md"?8:10}px ${theme.colors.gray3};
  }
`}`;
const HEADER_WITH_STAR = STAR(HEADER);

export default () => {
  const {screenSize,screenLen:_} = useScreenSize();

  const theme = useTheme();
  const { data,success}: FetchData<API_DATA_6> = useFetch <API_DATA_6>('about/value',[]);
  const {key,title,content} = useSelector((state: RootState) => getSingleTitle(state, "about_value"));

  return <Container className="grid grid-flow-rows place-items-center	md:grid-cols-3 gap-y-[40px] md:gap-x-[40px] lg:gap-x-[60px] xl:gap-x-[80px]" screenSize={screenSize}>
  
    <HEADER_WITH_STAR title={title} content={content} parentClass="md:col-span-1" />

    <Content className="md:col-span-2 grid w-fit gap-y-[20px] md:gap-[24px] lg:gap-[30px] md:grid-cols-[45%_1px_auto] p-[24px] md:p-[40px] lg:p-[50px] xl:p-[60px] border-[1px] rounded-[12px] border-gray-1 bg-gray-2">
      {data.map(({title,content,icon},index) => <>
        <div key={index} className="flex flex-col flex-wrap gap-y-[14px] md:gap-y-[16px] lg:gap-y-[18px] xl:gap-y-[20px]" >
            <div className="flex gap-x-[8px] lg:gap-x-[14px] xl:gap-x-[18px]  items-center">
              <IMAGE responsive="set6" path={icon}/>
              <TEXT text={title} fontSize={"24px"}/>
            </div>
            <TEXT text={content} fontSize={"18px"} color={theme.colors.gray1} fontWeight={500} />
        </div>
        {data.length-1!=index && <div className={`${index==1?"h-[1px] w-full col-span-full":"h-[1px] w-full md:max-w-[1px] md:h-full md:place-self-center"} bg-gray-5`}></div>}
      </>)}
    </Content> 
    
  </Container>
};