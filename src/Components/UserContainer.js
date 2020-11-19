import React, { Component } from 'react';
// import data from '../data';
import DisplayUser from './DisplayUser';
import Selector from './Selector'

export default class UserContainer extends Component {
    constructor() {
        super();

        this.state = {
            index: "number",

        }
    }

    handleChangeIndex() {

    }

    render() {
        return (
            <div className="user-container">
                <DisplayUser />
                <Selector />
            </div>
        )
    }
}


