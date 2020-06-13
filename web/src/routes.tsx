import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';
import SearchPoint from './pages/SearchPoint';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
            <Route component={CreatePoint} path="/create-point" />
            <Route component={SearchPoint} path="/search-point" />
        </BrowserRouter>
    );
};

export default Routes;