import styled,{ useTheme }  from "styled-components";
import { HEADER_TYPE_2 }    from '../../../utility/types/typeApp';
import {TEXT}               from "../elements"

interface COM_TYPE extends HEADER_TYPE_2 {
  backgroundStyle?:any
  titleSet?:string
}
const HEADER= ({title,content,parentClass="grid-cols-5",backgroundStyle=styled.div``,titleSet="set1"}:COM_TYPE) => {

    const MainWrapper=styled(backgroundStyle)``
    const theme = useTheme();

    return <MainWrapper className={`grid content-start grid-flow-row ${parentClass}`} >
      <TEXT text={title}   className="text-left col-start-1 col-span-4" responsive={titleSet} />
      <TEXT text={content} className="text-left col-start-1 col-span-4" fontSize={"18px"} color={theme.colors.gray1} fontWeight={500}  />
    </MainWrapper>
};
export default HEADER;