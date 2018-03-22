import React, { Component } from 'react';
import './App.css';
import AcronymList from './AcronymList';
import AddAcronymForm from './AddAcronymForm';

class App extends Component {
  render() {
    return (
      <div>
        <div><AddAcronymForm /></div>
        <div><AcronymList /></div>
      </div>
    );
  }
}

export default App;
