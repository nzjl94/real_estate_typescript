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

  return <Container className="grid grid-cols-3 gap-10">
    <div className="col-span-1 grid content-center gap-3">
      <TEXT text={title} />
      <TEXT text={content} fontSize={"18px"} color={theme.colors.gray1} fontWeight={500}/>
    </div>
    <Content className="col-span-2 grid grid-flow-row grid-cols-2 gap-7 p-[60px] border-[1px] rounded-[12px] border-gray-1 bg-gray-2">
      {data.map(({title,content,icon},index) => <div key={index} >
              <div className="flex gap-5">
                <IMAGE width={34} height={34} path={icon}/>
                <TEXT text={title} fontSize={"24px"}/>
              </div>
              <TEXT text={content} fontSize={"18px"} color={theme.colors.gray1} fontWeight={500} />
      </div>)}
    </Content> 
  </Container>
};