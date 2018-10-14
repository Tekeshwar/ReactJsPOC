import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    var age=20;
    return (
      <div className="App">
        <Header />
        <Home name={"tekesh"} initialAge={20} />
      </div>
    );
  }
}

export default App;
