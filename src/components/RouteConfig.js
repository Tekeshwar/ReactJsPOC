import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Signup from './components/Signup';
import Signin from './components/Signin';
class RouteConfig extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route path='/Signup' component={Signup} />
                </BrowserRouter>
                <BrowserRouter>
                    <Route path='/Signin' component={Signin} />
                </BrowserRouter>
            </div>
        );
    }
}
export default RouteConfig;

