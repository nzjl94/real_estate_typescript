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
    <div className="flex flex-col cp-gap-y-2">
      <HEADER_WITH_STAR title={title} content={content} />
      <div className="grid grid-cols-1 md:grid-cols-3 cp-gap-y-5 gap-x-[15px] lg:gap-x-[20px] xl:gap-x-[30px] items-stretch">
        {data.map(({m_title,s_title,content},index) => {
          return (
            <div key={index} className="flex flex-col">
              <TEXT text={m_title} responsive="set8" fontWeight={500} className="text-left py-[16px] px-[20px] border-l-[1px] border-purple-1" />
              <ElementWrapper className="flex flex-col grow cp-gap-y-3 cp-pd-1 rounded-[12px] border rounded-tl-[0px] border-gray-1">
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