import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List'
import { Alert } from 'reactstrap';

const target = [
  {
    name: "존맛탱a",
    description: "전나 맛있는 집임",

  }
]
class App extends Component {
  render() {
    return (
      <div>
        <Alert color="primary">
          This is a primary alert — check it out!
        </Alert>     
      </div>
    );
  }
}



export default App;
