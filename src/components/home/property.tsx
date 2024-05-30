import {
    cardPropertyType,propertyActionType
}                               from "../../utility/types/typeApp"
import {
	getSingleTitle,useSelector,RootState,STAR,PAGINATION,CARD2,CARD6,
    styled,usePagination,ExploreAction,useNavigate
}                               from "./header"

const Container = styled.div`${({theme}) => ``}`;

const Property = () => {

    const navigate = useNavigate();
	const propertyAction:propertyActionType  = () => (e) => {
		navigate(`/property`)
	}
    const {key,title,content} = useSelector((state: RootState) => getSingleTitle(state, "home_property"));

    const data ={
        buttonText:"View All Properties",
        parentClass:"mb-[80px]",
        buttonClass:"bg-gray-1 border-gray-1"
    }
    const {cards,pagText,sliceState,cardsPerPage,paginBack,paginFront}=usePagination<cardPropertyType>("home/property")

    const HEADER_WITH_STAR = STAR(CARD6);

    return <Container className='flex flex-col gap-y-[40px] md:gap-y-[60px] lg:gap-y-[80px] py-[75px]'>

        <ExploreAction.Provider value={propertyAction()}>
            <HEADER_WITH_STAR {...data} title={title} content={content} starClass={"-top-[45px] -left-[30px]"}/>
        </ExploreAction.Provider>
        <div className="grid grid-flow-row gap-y-[50px]">
            <div className={`grid grid-flow-row grid-cols-${cardsPerPage} gap-x-[30px]`}>{
                cards.map((card, index) => <CARD2 {...card} />)
            }</div>
            <PAGINATION pagText={pagText} sliceState={sliceState} paginBack={paginBack} paginFront={paginFront} />
        </div>
    </Container>  
}
export default Property