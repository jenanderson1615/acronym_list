import React from 'react';
import AcronymList from './AcronymList';
import AddAcronymForm from './AddAcronymForm';

class AcronymDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      acronyms: [
        {
          key: 1,
          acronym: 'lol',
          meaning: 'laugh out loud',
        },
        {
          key: 2,
          acronym: 'cwot',
          meaning: 'complete waste of time',
        },
      ]  
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit = (newAcronym) => {
    console.log(newAcronym)
    this.setState({
      acronyms: this.state.acronyms.concat(newAcronym),
    });
  };

  render() {
    const existingAcronyms = this.state.acronyms;
    var index = existingAcronyms.length + 1;
    return (
      <div>
        <div><AddAcronymForm acronymCount={index} onFormSubmit={this.handleFormSubmit}/></div>
        <div><AcronymList acronyms={this.state.acronyms} /></div>
      </div>
    );
  }
}

export default AcronymDashboard;