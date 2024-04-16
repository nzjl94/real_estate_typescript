import GEN_Component          from "../ui/genComponent_1"
import { ExploreAction }      from '../../store/Context';
import {API_DATA_4}           from "../../utility/typeApp"
import useFetch, {FetchData}  from '../../utility/customHook/API';

export default () => {

  const { data,success}: FetchData<API_DATA_4> = useFetch <API_DATA_4>('realestate/about/start',{title:"",content:"",url:""});

	type visitWebsiteType = (parameter: string) => (e: React.MouseEvent) => void;

	const visitWebsiteButton:visitWebsiteType  = (parameter) => (e) => {
		console.log(`About Us ${parameter}`)
	}
  return (
    <ExploreAction.Provider value={visitWebsiteButton(data.url)}>
      <GEN_Component text_1={"Since "+data.title} text_2={data.content} buttonText={"Explore Properties"} />
    </ExploreAction.Provider>
  );
};