import React, { Component } from 'react';

class AddAcronymForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>Enter Acronym: </label>
                        <input type="text"></input>
                    </div>
                    <div>
                        <label>Enter Acronym Definition: </label>
                         <input type="text"></input>
                    </div>
                    <div>
                        <button className = 'ui basic blue button'>Submit</button>
                    </div>    
                </form>
            </div>
        );
    }
}

export default AddAcronymForm;