import React, { Component } from 'react';
import './App.css';
import './Person/Person';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons : [
      {id: 'a1', name: "Edgars", age: 28},
      {id: 'a2', name: "Andrejs", age: 24},
      {id: 'a3', name: "Max", age: 20}
    ],
    showPersons: false
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

  changeDynNameHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name =event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

      this.setState( {persons : persons});    
  }

  deletePersonHandler = (personIndex) => {
      //const persons = this.state.persons.slice();
      const persons = [...this.state.persons]; //The same as  -> const persons = this.state.persons.slice(); you cant use just this.state.persons because you copy only reference to array object and operate with original values
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
  }

  togglePersonHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
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

    let persons = null;

    if(this.state.showPersons) {
      persons = (       
      <div>
        {this.state.persons.map((person, index) =>{
          return <Person 
          click = {this.deletePersonHandler.bind(this, index)}
          name = {person.name}
          age = {person.age} 
          key = {person.id}
          changed = {(event) => this.changeDynNameHandler(event, person.id)}/>
        })}
        {/* <Person 
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
        changed={this.changeDynNameHandler}/> */}
      </div>
      );
    }

    return (
      <div className="App">
       <h1>Hi, I am React App</h1>
       <button 
       style = {style}
      //  onClick={() => this.switchNameHandler('Ed')}
      onClick={this.togglePersonHandler}
       >Toggle Persons
       </button> {/*Prefer to use .bind() */}
       {/* { this.state.showPersons ?
         <div>
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
        </div> : null
       } */}
        {persons}
      </div>
    );

    //This code equivalent with previous one
    // return React.createElement('div', {className:"App"}, React.createElement('h1', null, 'It\'s new React App'))
  }
}

export default App;
