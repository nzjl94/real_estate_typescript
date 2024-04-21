import styled,{ useTheme }    from "styled-components";
import TEXT_1                 from "../ui/TEXT"
// This approch it work only if the files inside [src] but does not work when they inside [public]
import profilePic             from '../../image/about/journey/title.png'
import {API_DATA_2}           from '../../utility/typeApp';
import useFetch, {FetchData}  from '../../utility/customHook/API';


const Container = styled.div``;

export default () => {
  const theme = useTheme();
  const { data,success}: FetchData<API_DATA_2> = useFetch <API_DATA_2>('realestate/about/journey',{title:{},sections:[]});

  return (
    <Container className="grid grid-cols-7 gap-6 mt-[150px]">
        <div className="col-span-4 flex flex-col justify-around">
            <div className="mainHeader">
                <TEXT_1 text={data.title?.title} />
                <TEXT_1 text={data.title?.content} fontSize={"18px"} color={theme.colors.gray1} />
            </div>
            <div className="self-stretch grid grid-cols-3  gap-3">
                {Object.keys(data.sections).length>0 && data.sections.map(({title,content},index) => {
                  return (
                    <div key={index} className="p-[16px] border-[1px] rounded-[12px] border-gray-1 bg-gray-1">
                        <TEXT_1 text={title} fontSize={"40px"} />
                        <TEXT_1 text={content} fontSize={"18px"} color={theme.colors.gray1} />
                    </div>
                  );
                })}
            </div>
        </div>
        <div className="col-span-3">
            <img src={profilePic} alt="Vercel Logo" className="image" />
        </div>
    </Container>
  );
};