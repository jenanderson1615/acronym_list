import React from 'react';
import AcronymEntry from './AcronymEntry'

class AcronymList extends React.Component {
    render() {
        const acronyms = this.props.acronyms.map((acronymItem) => (
            <AcronymEntry
                key={acronymItem.key}
                acronym={acronymItem.acronym}
                meaning={acronymItem.meaning}
            />
        ));

        return (
            <div>
                {acronyms}
            </div>
        );
    }
}

export default AcronymList;
