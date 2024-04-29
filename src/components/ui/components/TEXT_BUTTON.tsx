import {CARD6 as CARD}        from "../cards"
import { ExploreAction }      from '../../../store/Context';
import {API_DATA_4}           from "../../../utility/typeApp"
import useFetch, {FetchData}  from '../../../utility/customHook/API';

const TEXT_BUTTON:React.FC<{id?:string,show?:boolean}>=({id=undefined,show=false}) => {

  const { data,success}: FetchData<API_DATA_4> = useFetch <API_DATA_4>('realestate/about/start',{title:"",content:"",url:""});

	type visitWebsiteType = (parameter: string) => (e: React.MouseEvent) => void;

	const visitWebsiteButton:visitWebsiteType  = (parameter) => (e) => {
		console.log(`About Us ${parameter}`)
	}
  return <div id={id!==undefined?id:""}>
    <ExploreAction.Provider value={visitWebsiteButton(data.url)}>
      <CARD title={data.title} content={data.content} buttonText={"Explore Properties"} showButton={show} />
    </ExploreAction.Provider>
  </div>
};

export default TEXT_BUTTON