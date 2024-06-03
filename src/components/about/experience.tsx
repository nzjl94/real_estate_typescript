import {
	getSingleTitle,useSelector,useFetch,FetchData,
  useTheme,styled,RootState,TEXT,HEADER,STAR
} 								            from "./header"

const ElementWrapper = styled.div`
    background: linear-gradient(121deg, #703BF7 -49.01%, rgba(112, 59, 247, 0.00) 13.65%);
`;

const Experience = () => {
  const { data,success}: FetchData<[]> = useFetch <[]>('about/experience',[]);
  const {key,title,content} = useSelector((state: RootState) => getSingleTitle(state, "about_experience"));
  const theme = useTheme();

  const HEADER_WITH_STAR = STAR(HEADER);


  return (
    <div className="flex flex-col gap-y-[40px] md:gap-y-[50px] lg:gap-y-[60px] xl:gap-y-[80px]">
      <HEADER_WITH_STAR title={title} content={content} />
      <div className="grid grid-cols-1 md:grid-cols-3  gap-y-[30px] lg:gap-y-[40px] xl:gap-y-[50px] gap-x-[15px] lg:gap-x-[20px] xl:gap-x-[30px] items-stretch">
        {data.map(({m_title,s_title,content},index) => {
          return (
            <div key={index} className="flex flex-col">
              <TEXT text={m_title} responsive="set8" fontWeight={500} className="text-left py-[16px] px-[20px] border-l-[1px] border-purple-1" />
              <ElementWrapper className="flex flex-col grow gap-y-[14px] lg:gap-y-[16px] xl:gap-y-[20px] p-[30px] lg:p-[40px] xl:p-[50px] rounded-[12px] border rounded-tl-[0px] border-gray-1">
                <TEXT text={s_title} responsive="set10" />
                <TEXT text={content} responsive="set2" color={theme.colors.gray1} fontWeight={500}  />
              </ElementWrapper>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Experience;