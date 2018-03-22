import React from 'react';
import AcronymEntry from './AcronymEntry'

class AcronymList extends React.Component {
    render() {
        const acronyms = this.props.acronyms.map((acronym) => (
            <AcronymEntry
                acronym={acronym.acronym}
                meaning={acronym.meaning}
            />
        ));

        return (
            <div id='acronyms'>
                {acronyms}
            </div>
        );
    }
}

export default AcronymList;
