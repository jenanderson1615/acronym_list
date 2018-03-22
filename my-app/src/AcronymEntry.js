import React, { Component } from 'react';

class AcronymEntry extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.acronym}</h1>
                <p>{this.props.meaning}</p>
            </div>
        );
    }
}

export default AcronymEntry;