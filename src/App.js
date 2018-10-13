import React, { Component } from 'react';
import Header from './components/Header'; 
import logo from './logo.svg';
import './App.css';
 import { BrowserRouter, Route } from 'react-router-dom'

class App extends React.Component  {
  render() {
    return (

      <div className="App">
        <Header /> 
      </div>
    );
  }
}

export default App;
