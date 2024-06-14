import {
    cardClientType,propertyActionType
}                           from "../../utility/types/typeApp"
import {
	getSingleTitle,useSelector,RootState,STAR,PAGINATION,CARD5,CARD6,
    styled,usePagination,ExploreAction,useNavigate
}                           from "./header"


const Client = () => {

    const navigate = useNavigate();

	const propertyAction:propertyActionType  = () => (e) => {
		navigate(`/property`)
	}
    const data ={
        buttonText:"View All Testimonials",
        parentClass:"mb-[80px]",
        buttonClass:"cp-color-2"
    }
    const {key,title,content} = useSelector((state: RootState) => getSingleTitle(state, "home_client"));

    const {cards,pagText,sliceState,cardsPerPage,paginBack,paginFront}=usePagination<cardClientType>("home/client")
    const Container = styled.div`${({theme}) => ``}`;

    const HEADER_WITH_STAR = STAR(CARD6);
    
    return <Container className='flex flex-col cp-gap-y-2'>
        <ExploreAction.Provider value={propertyAction()}>
            <HEADER_WITH_STAR {...data}  title={title} content={content} starClass={"-top-[45px] -left-[30px]"}/>
        </ExploreAction.Provider>
        <div className="grid grid-flow-row gap-y-[50px]">
            <div className={`grid grid-flow-row grid-cols-${cardsPerPage} gap-x-[30px]`}>{
                cards.map((card, index) => <CARD5 {...card} id={index} />)
            }</div>
            <PAGINATION pagText={pagText} sliceState={sliceState} paginBack={paginBack} paginFront={paginFront} />
        </div>
    </Container>
        
}
export default Client