import {getSingleTitle,useSelector,RootState,HEADER,STAR}   from "./header"

const Search = () => {
    const {key,title,content} = useSelector((state: RootState) => getSingleTitle(state, "property_search"));
    const HEADER_WITH_STAR = STAR(HEADER);
    return <div className='px-[16px] lg:px-[80px] xl:px-[160px] py-[75px] relative'>
        <HEADER_WITH_STAR title={title} content={content} starClass={"-top-[45px] -left-[30px]"} />
    </div>
}
export default Search