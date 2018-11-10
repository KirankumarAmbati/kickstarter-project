import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  componentDidMount() {
    axios.get('https://raw.githubusercontent.com/KirankumarAmbati/kickstarter-project/master/data.txt')
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
