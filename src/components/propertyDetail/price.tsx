
import {getSingleTitle,useSelector,styled,RootState,CARD7}  from "./header"

const Container = styled.div`${({theme}) => ``}`;

const Price = () => {
  const {key,title,content} = useSelector((state: RootState) => getSingleTitle(state, "property_detail_pricing"));

  return  <Container>
    <CARD7 />
  </Container>
}
export default Price