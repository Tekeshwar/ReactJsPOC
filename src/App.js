import React, { Component } from 'react';
import Header from './components/Header';
 import Signup from './components/Signup';
import Signin from './components/Signin';
// import RouteConfig from './components/RouteConfig';
import logo from './logo.svg';
import './App.css';
 import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component  {
  render() {
    return (

      <div className="App">
        <Header />
        <BrowserRouter>
          <Route path='/Signup' component={Signup} />
        </BrowserRouter>
        <BrowserRouter>
          <Route path='/Signin' component={Signin} />
        </BrowserRouter>
        {/* <RouteConfig/> */}
      </div>
    );
  }
}

export default App;
