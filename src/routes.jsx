import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import Home from './components/views/home';
import Contact from './components/views/contact';
import Test from "./components/views/test";

export default (
    <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path='contact' component={Contact}/>
        <Route path='test' component={Test}/>
        <Route path='*' component={Home}/>
    </Route>
);