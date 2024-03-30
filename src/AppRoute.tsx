import {useRoutes } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import Property from './components/property';
import Service from './components/service';

const AppRoute = () => {

    const routes: RouteObject[] = [
        {
        path: '/',
        children: [
            { index: true, element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: '/property', element: <Property /> },
            { path: '/service', element: <Service /> },
            { path: '/about', element: <About /> },
            { path: '/contact', element: <Contact /> }
        ],
        },
    ];
    return useRoutes(routes);
};

export default AppRoute;
