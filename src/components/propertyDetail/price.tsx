
import {getSingleTitle,useSelector,styled,RootState}  from "./header"

const Container = styled.div`${({theme}) => ``}`;

const Price = () => {
  const {key,title,content} = useSelector((state: RootState) => getSingleTitle(state, "property_detail_pricing"));
  console.log(key,title,content)

  return  <Container>
    Price
  </Container>
}
export default Price