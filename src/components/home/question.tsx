import {
    cardQuestionType,propertyActionType
}                           from "../../utility/types/typeApp"
import {
	getSingleTitle,useSelector,RootState,STAR,PAGINATION,styled,
    CARD4,CARD6,usePagination,ExploreAction,useNavigate
}   from "./header"

const Container = styled.div`${({theme}) => ``}`;

const Question = () => {
    const navigate = useNavigate();
	const propertyAction:propertyActionType  = () => (e) => {
		navigate(`/property`)
	}
    const {cards,pagText,sliceState,cardsPerPage,paginBack,paginFront}=usePagination<cardQuestionType>("home/question")

    const data ={
        buttonText:"View All FAQ’s",
        parentClass:"mb-[80px]",
        buttonClass:"cp-color-2"
    }
    const {key,title,content} = useSelector((state: RootState) => getSingleTitle(state, "home_question"));
    const HEADER_WITH_STAR = STAR(CARD6);

    return <Container className='flex flex-col cp-gap-y-2'>
        <ExploreAction.Provider value={propertyAction()}>
            <HEADER_WITH_STAR {...data} title={title} content={content} starClass={"-top-[45px] -left-[30px]"}/>
        </ExploreAction.Provider>
        <div className="grid grid-flow-row gap-y-[50px]">
            <div className={`grid grid-flow-col grid-cols-${cardsPerPage} gap-x-[30px]`}>{
                cards.map((card, index) => <CARD4 {...card}  key={index} />)
            }</div>
            <PAGINATION pagText={pagText} sliceState={sliceState} paginBack={paginBack} paginFront={paginFront} />
        </div>
    </Container>    
}
export default Question