import {
	getSingleTitle,useSelector,useFetch,FetchData,useTheme,styled,RootState,TEXT,HEADER
} 								            from "./header"

const ElementWrapper = styled.div`
    background: linear-gradient(121deg, #703BF7 -49.01%, rgba(112, 59, 247, 0.00) 13.65%);
`;
const Experience = () => {
  const { data,success}: FetchData<[]> = useFetch <[]>('about/experience',[]);
  const {key,title,content} = useSelector((state: RootState) => getSingleTitle(state, "about_experience"));
  const theme = useTheme();

  return (
    <div className="grid flex-col gap-10">
      <HEADER title={title} content={content} />
      <div className="grid grid-flow-row grid-cols-3  gap-5 items-stretch">
        {data.map(({m_title,s_title,content},index) => {
          return (
            <div key={index} className="flex flex-col">
              <TEXT text={m_title} fontSize={"20px"} fontWeight={500} className="py-[16px] px-[20px] border-l-[1px] border-purple-1" />
              <ElementWrapper className="flex flex-col grow gap-[20px] p-[50px] rounded-[12px] border rounded-tl-[0px] border-gray-1">
                <TEXT text={s_title} fontSize={"26px"} />
                <TEXT text={content} fontSize={"18px"} color={theme.colors.gray1} fontWeight={500}  />
              </ElementWrapper>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Experience;