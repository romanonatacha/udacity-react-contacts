import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ContactList extends React.Component {
  render() {
    const people = this.props.contacts

    return <ol>
      {people.map(person => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList contacts={[
          { name: 'June' },
          { name: 'Rory' },
          { name: 'Lorelai' }
        ]} />
        <ContactList contacts={[
          { name: 'Andy' },
          { name: 'Luca' },
          { name: 'Fred' }
        ]}/>
      </div>
    );
  }
}

export default App;
