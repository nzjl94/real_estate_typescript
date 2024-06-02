import {
	getSingleTitle,useSelector,useFetch,FetchData,
	useTheme,RootState,IMAGE,TEXT,styled
} 								    from "./header"
import {API_DATA_6}   from '../../utility/types/typeApp';

const Content=styled.div``;
const Container = styled.div`${({theme}) => `
  ${Content} {
    box-shadow: 0px 0px 0px 10px ${theme.colors.gray3};
  }
`}`;

export default () => {
  const theme = useTheme();
  const { data,success}: FetchData<API_DATA_6> = useFetch <API_DATA_6>('about/value',[]);
  const {key,title,content} = useSelector((state: RootState) => getSingleTitle(state, "about_value"));

  return <Container className="grid grid-flow-rows md:grid-cols-3 gap-y-[40px] md:gap-x-[40px] lg:gap-x-[60px] xl:gap-x-[80px]">
    <div className="md:col-span-1 flex flex-col gap-y-[8px] lg:gap-y-[10px] xl:gap-y-[14px]">
      <TEXT text={title} responsive="set1" />
      <TEXT text={content} responsive="set2" color={theme.colors.gray1} fontWeight={500}/>
    </div>
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