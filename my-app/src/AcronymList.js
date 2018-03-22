import React, { Component } from 'react';
import AcronymEntry from './AcronymEntry'

class AcronymList extends Component {
  render() {
      return(
        <div>
            <h1>List</h1>
            <AcronymEntry 
                acronym='afaik'
                meaning='as far as I know'
            />
            <AcronymEntry
                acronym='lol'
                meaning='laugh out loud'
            />
        </div>
      );
  }
}

export default AcronymList;
