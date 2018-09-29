import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">개박살 리스트</h1>
        </header>
        <p className="App-intro">
          수도권 일대의 맛집을 개박살 내기 위한 리스트.
        </p>
      </div>
    );
  }
}

export default App;
