import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainFrame from './ui/main/MainFrame';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainFrame></MainFrame>
      </div>
    );
  }
}

export default App;
