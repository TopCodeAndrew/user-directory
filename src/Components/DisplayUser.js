import React, { Component } from 'react'

export default class DisplayUser extends Component {
    constructor() {
        super();

        this.state = {
            displayedUser: '',
        }
    }

    render() {
        return (
            <div className="user-card">
                <header className="placement-indicator">{this.props.index + 1}/{this.props.data.length}</header>
                <div>USER INFO HERE</div>
            </div>
        )
    }
}