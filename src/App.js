import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    var employeesList = {
      "employees": [
        { "firstName": "John", "lastName": "Doe" },
        { "firstName": "Anna", "lastName": "Smith" },
        { "firstName": "Peter", "lastName": "Jones" }
      ]
    }
    return (
      <div className="App">
        <Header />
        <Home name="Tekesh" employeesList={employeesList} />
      </div>
    );
  }
}

export default App;
