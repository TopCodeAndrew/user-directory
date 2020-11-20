import React, { Component } from 'react';
import data from '../data';
import DisplayUser from './DisplayUser';
import Selector from './Selector'

export default class UserContainer extends Component {
    constructor() {
        super();

        this.state = {
            userArray: data,
            index: 0,
        }

        this.handleNextButton = this.handleNextButton.bind(this)
        this.handlePreviousButton = this.handlePreviousButton.bind(this)
    }

    handleNextButton() {
        let potentialIndex = this.state.index;
        if (potentialIndex < this.state.userArray.length - 1) {
            this.setState({
                index: this.state.index + 1,
            });

        } else {
            alert("there are no more items!")
        }
        console.log(this.state.userArray.length)
        console.log(potentialIndex)
        console.log(this.state.index)
    }

    handlePreviousButton() {
        let potentialIndex = this.state.index;
        if (potentialIndex > 0) {
            this.setState({
                index: this.state.index - 1,
            });
            console.log(this.state.index)

        } else {
            alert("You are at the beginning of the list :)")
        }
    }






    render() {
        return (
            <div className="user-container">
                <DisplayUser data={data} index={this.state.index} />
                <Selector
                    handleNextButton={this.handleNextButton}
                    handlePreviousButton={this.handlePreviousButton} />
            </div>
        )
    }
}



