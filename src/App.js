import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
