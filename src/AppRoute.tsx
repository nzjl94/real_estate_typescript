import {useRoutes,RouteObject,useNavigate,Navigate,Route}         from 'react-router-dom';

import PrivateRoute from "./PrivateRoute"

import About    from './components/about';
import Contact  from './components/contact';
import Home     from './components/home';
import Property from './components/property';
import Service  from './components/service';
import Login  from './components/auth/Login';

import { useSelector } from 'react-redux';

import { RootState }                from './store/Reducer';



const AppRoute = () => {

    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    console.log(isAuthenticated,"HIIiiiiiiiii")

    const routes: RouteObject[] = [
        {
        path: '/',
        children: [
            { index: true,          element: <Home /> },
            { path: '/home',        element: <Home /> },
            { path: '/property',    element: <Property /> },
            { path: '/service',     element: <Service /> },
            // { path: '/about',       element: <About /> },
            { path: '/contact',     element: <Contact /> },
            { path: '/login',       element: <Login /> },
            // {path: '/service',      element: <PrivateRoute element={<Service />} />}
            {
                path: '/about',
                element: isAuthenticated ?(<PrivateRoute> <About /> </PrivateRoute>):(<Navigate to="/login" replace />)
              },
        ],
        },
    ];
    return useRoutes(routes);
};





// const App: React.FC = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/login" component={LoginPage} />
//         <PrivateRoute path="/dashboard" component={DashboardPage} />
//         {/* Add more routes here */}
//       </Switch>
//     </Router>
//   );
// };



export default AppRoute;
