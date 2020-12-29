import React, { Component } from 'react'

class Selector extends Component {

    constructor() {
        super();

        // this.state = {
        //     index: 0
        // }
    }


    render() {
        let next = "Next >"
        let previous = "< Previous"
        return (
            <div className="selector">
                <div className="button" onClick={this.props.handlePreviousButton}>{previous}</div>
                <div className="blue-button-container">
                    <div className="blue-button">Edit</div>
                    <div className="blue-button">Delete</div>
                    <div className="blue-button">New</div>
                </div>
                <div className="button" onClick={this.props.handleNextButton}>{next}</div>
            </div >
        )
    }
}


export default Selector