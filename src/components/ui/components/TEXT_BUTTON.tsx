import styled,{ useTheme }            from "styled-components";
import {CARD6}                        from "../cards"
import { ExploreAction }              from '../../../store/Context';
import {API_DATA_4,visitWebsiteType}  from "../../../utility/types/typeApp"
import useFetch, {FetchData}          from '../../../utility/customHook/useGetAPI';


const Container = styled.div`${({theme}) => `
  position: relative;
  .background-1 {
      background-image: url('/image/general/back1.svg');
      height: 394px; 
      width: 725px; 
      background-position: left; 
      background-repeat: no-repeat;
      position: absolute;
      left: 0px;
      bottom: -42px;
  }
  .background-2 {
      background-image: url('/image/general/back2.svg');
      height: 394px; 
      width: 725px; 
      background-position: right; 
      background-repeat: no-repeat;
      position: absolute;
      right: 0px;
      bottom: -33px;
  }
`}`;

const visitWebsiteButton:visitWebsiteType  = (parameter) => (e) => {
  console.log(`About Us ${parameter}`)
}
const TEXT_BUTTON:React.FC<{id?:string,show?:boolean,parentClass?:string}>=({id=undefined,show=false,parentClass=""}) => {

  const { data,success}: FetchData<API_DATA_4> = useFetch <API_DATA_4>('about/start',{title:"",content:"",url:""});

  return <Container id={id!==undefined?id:""} className={`${parentClass}`}>
    <div className="background-1 z-1"></div>
    <div className="relative z-10">
      <ExploreAction.Provider value={visitWebsiteButton(data.url)}>
        <CARD6 title={data.title} content={data.content} buttonText={"Explore Properties"} showButton={show} />
      </ExploreAction.Provider>
    </div>
    <div className="background-2 z-1"></div>
  </Container>

};
export default TEXT_BUTTON