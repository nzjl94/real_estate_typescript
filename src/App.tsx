
import {useEffect }                 from "react";
import { BrowserRouter as Router}   from 'react-router-dom';
import { useSelector,useDispatch }  from 'react-redux';

import { RootState }    from './store/Reducer';


import './App.css';
import GlobalStyle from './globalStyles';



import AppRoute from "./AppRoute"
import Navbar from './components/general/navbar';
import Footer from './components/footer';

import { AppDispatch }              from './store/index';
import { fetchData, selectTitle}    from './store/slice/title';


const App=() => {

  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  let titleInfo = useSelector(selectTitle);

	const dispatch = useDispatch<AppDispatch>();
	useEffect( () => {
		if(isAuthenticated && titleInfo.loading==="idle"){
			dispatch(fetchData());
		}
	}, [fetchData,isAuthenticated])

  return (<>
    <GlobalStyle />
    <div className="App">
      <Router>
        <Navbar />
        <div className="flex min-h-screen flex-col items-center justify-between bg-black">
          <AppRoute />
          
          {/* Dynamically adding the route */}
          {/* <Routes >
          {let RouteList=[{path:['/property'] ,element:<Property />}]
            RouteList.map(({path,element})=>path.map(ele_path => <Route path={ele_path} element={element} />))}
          </Routes> */}

          {/* Manually adding the route */}
          {/* <Routes >
            {['/', '/home'].map(path => <Route path={path} element={<Home />} />)}
            <Route path="/property" element={<Property />} />
          </Routes> */}
          <Footer />
        </div>
      </Router>
    </div>
  </>);
}

export default App;
