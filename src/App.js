import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hi, I am React App</h1>
      </div>
    );

    //This code equivalent with previous one
    // return React.createElement('div', {className:"App"}, React.createElement('h1', null, 'It\'s new React App'))
  }
}

export default App;
