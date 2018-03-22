import React from 'react';
import AcronymList from './AcronymList';
import AddAcronymForm from './AddAcronymForm';

class AcronymDashboard extends React.Component {
  state = {
    acronyms: [
      {
        acronym: 'KMN',
        meaning: 'Kill Me Now',
      },
      {
        acronym: 'lol',
        meaning: 'laugh out loud',
      },
      {
        acronym: 'cwot',
        meaning: 'complete waste of time',
      },
    ]
  }

  render() {
    return (
      <div>
        <div><AddAcronymForm /></div>
        <div><AcronymList acronyms={this.state.acronyms} /></div>
      </div>
    );
  }
}

export default AcronymDashboard;