import React, { Component } from 'react';
import './App.css';
import './Person/Person';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons : [
      {name: "Edgars", age: 28},
      {name: "Andrejs", age: 24},
      {name: "Max", age: 20}
    ]
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked!');
    //DONT DO THIS: this.state.persons[0].name = 'Ed';
    this.setState( {
        persons : [
          {name: newName, age: 28},
          {name: "Andrejs", age: 24},
          {name: "Max", age: 15}
        ]
      }
    );    
  }

  render() {
    return (
      <div className="App">
       <h1>Hi, I am React App</h1>
       <button onClick={() => this.switchNameHandler('Ed')}>Switch Name</button>
       <Person 
       name={this.state.persons[0].name} 
       age={this.state.persons[0].age}/>
       <Person 
       name={this.state.persons[1].name} 
       age={this.state.persons[1].age}
       click={this.switchNameHandler.bind(this, 'Edgars!!!!')}>
       My Hobbies: Learn React</Person>
       <Person 
       name={this.state.persons[2].name}
       age={this.state.persons[2].age}/>
      </div>
    );

    //This code equivalent with previous one
    // return React.createElement('div', {className:"App"}, React.createElement('h1', null, 'It\'s new React App'))
  }
}

export default App;
