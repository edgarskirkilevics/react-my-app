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

  changeDynNameHandler = (event) => {
      this.setState( {
        persons : [
          {name: "Edgars", age: 28},
          {name: "Andrejs", age: 24},
          {name: event.target.value, age: 15}
        ]
      }
    );    
  }

  render() {
    //Inline style
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
       <h1>Hi, I am React App</h1>
       <button 
       style = {style}
       onClick={() => this.switchNameHandler('Ed')}>Switch Name
       </button> {/*Prefer to use .bind() */}
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
       age={this.state.persons[2].age}
       changed={this.changeDynNameHandler}/>
      </div>
    );

    //This code equivalent with previous one
    // return React.createElement('div', {className:"App"}, React.createElement('h1', null, 'It\'s new React App'))
  }
}

export default App;
