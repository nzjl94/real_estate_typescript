import React,{ReactNode} from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { RootState }                from './store/Reducer';


// interface PrivateRouteProps {
// //   component: React.ComponentType<any>;
// //   path: string;
// //   exact?: boolean;
//   element: React.ReactNode;
// }

// const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {


//   return (
//     <Route
//       {...rest as any}
//       render={(props:any) =>
//         isAuthenticated ? (Component ? <Component {...props} /> : null) : navigate("/login")
//       }
//     />
//   );
// };


  
//   const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {


//     const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
//     let navigate = useNavigate();

  
//     if (isAuthenticated) {
//       return <>{element}</>;
//     } else {
//       return navigate("/login");
//     }
//   };


const ProtectedLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      {/* Shared elements */}
      {children}
    </div>
  );
};

export default ProtectedLayout;
