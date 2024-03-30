import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router} from 'react-router-dom';

import AppRoute from "./AppRoute"
import './App.css';
import Navbar from './components/general/navbar';

function App() {

  return (<>
    <GlobalStyle />
    <div className="App">
      <Router>
        <Navbar />
        <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
          <AppRoute />
          
          {/* Dynamically adding the route */}
          {/* <Routes >
          {
            let RouteList=[
              {path:['/', '/home'],element:<Home />},
              {path:['/property'] ,element:<Property />},
            ]
            RouteList.map(({path,element})=>path.map(ele_path => <Route path={ele_path} element={element} />))
          }
          </Routes> */}

          {/* Manually adding the route */}
          {/* <Routes >
            {['/', '/home'].map(path => <Route path={path} element={<Home />} />)}
            <Route path="/property" element={<Property />} />
            <Route path="/service"  element={<Service />} />
            <Route path="/about"    element={<About />} />
            <Route path="/contact"  element={<Contact />} />
          </Routes> */}
        </div>
      </Router>
    </div>
  </>);
}

export default App;
