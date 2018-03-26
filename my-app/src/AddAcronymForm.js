import React, { Component } from 'react';

class AddAcronymForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            acronym: '',
            meaning: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Enter Acronym: </label>
                        <input type="text" name="acronym" ></input>
                    </div>
                    <div>
                        <label>Enter Acronym Definition: </label>
                         <input type="text" name="meaning"></input>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>    
                </form> 
            </div>
        );
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log();
        this.props.onFormSubmit({
            key: this.props.acronymCount,
            acronym: e.target.acronym.value,
            meaning: e.target.meaning.value,
        });
    }
}

export default AddAcronymForm;