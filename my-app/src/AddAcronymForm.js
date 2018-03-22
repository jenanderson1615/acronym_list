import React, { Component } from 'react';

class AddAcronymForm extends Component {
    render() {
        return (
            <div>
                <form>
                    Enter Acronym: <input type="text"></input><br></br>
                    Enter Acronym Definition: <input type="text"></input><br></br>
                    <input type="submit" value="Submit"></input><br></br>
                </form>
            </div>
        );
    }
}

export default AddAcronymForm;