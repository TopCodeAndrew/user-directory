import React, { Component } from 'react'

class Selector extends Component {
    constructor() {
        super();

        this.state = {
            var: "var",
        }
    }


    render() {
        return (
            <div className="selector">
                <div className="button">Previous</div>
                <div className="blue-button-container">
                    <div className="blue-button">Edit</div>
                    <div className="blue-button">Delete</div>
                    <div className="blue-button">New</div>
                </div>
                <div className="button">Next</div>

            </div >
        )
    }
}


export default Selector