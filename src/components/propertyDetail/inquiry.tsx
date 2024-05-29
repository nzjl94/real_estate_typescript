

import {
  getSingleTitle,useSelector,styled,RootState,
  TEXT,useFetch,FetchData,IMAGE,useTheme,HEADER
}  from "./header"

const Container = styled.div`${({theme}) => ``}`;

const Inquiry = () => {
  const {key,title,content} = useSelector((state: RootState) => getSingleTitle(state, "property_detail_inquire"));
  console.log(key,title,content)

  return  <Container className="grid grid-cols-5 gap-x-[100px]">
    <HEADER title={title} content={content} parentClass="col-span-2 grid-cols-4 gap-y-[14px]"  />

    <div className="col-span-3 p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px] grid gap-y-[20px] md:gap-y-[30px] lg:gap-y-[40px] xl:gap-y-[50px]">
        
    </div>
  </Container>
}
export default Inquiry