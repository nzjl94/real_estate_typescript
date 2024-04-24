import GEN_Component          from "../ui/genComponent_1"
import { ExploreAction }      from '../../store/Context';
import {API_DATA_4}           from "../../utility/typeApp"
import useFetch, {FetchData}  from '../../utility/customHook/API';

export default (props:{id?:string}) => {

  const { data,success}: FetchData<API_DATA_4> = useFetch <API_DATA_4>('realestate/about/start',{title:"",content:"",url:""});

	type visitWebsiteType = (parameter: string) => (e: React.MouseEvent) => void;

	const visitWebsiteButton:visitWebsiteType  = (parameter) => (e) => {
		console.log(`About Us ${parameter}`)
	}
  return <div id={props.id!==undefined?props.id:""}>
    <ExploreAction.Provider value={visitWebsiteButton(data.url)}>
      <GEN_Component title={data.title} content={data.content} buttonText={"Explore Properties"} />
    </ExploreAction.Provider>
  </div>
};