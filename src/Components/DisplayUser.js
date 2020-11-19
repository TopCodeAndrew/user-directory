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
                <header>"1/25" HERE</header>
                <div>USER INFO HERE</div>
            </div>
        )
    }
}