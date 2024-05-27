import {
	getSingleTitle,useSelector,useFetch,FetchData,RootState
} 							from "./header"
import {TEXT_IMAGE}         from "../ui/components";
import {TEXT_PARAGRAPH}     from '../../utility/types/typeApp';
import profilePic           from '../../image/title.png' // This approch it work only if the files inside [src] but does not work when they inside [public]

const Journey = () => {
    const title = useSelector((state: RootState) => getSingleTitle(state, "about_journey"));
    const { data:sections,success}: FetchData<TEXT_PARAGRAPH[]> = useFetch <TEXT_PARAGRAPH[]>('about/journey',[]);
    return <TEXT_IMAGE title={title} sections={sections} img={profilePic} parentClass='mt-[100px]' />
}

export default Journey