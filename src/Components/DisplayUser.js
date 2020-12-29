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


                <div className="user-info">
                    {/* NAME */}
                    <h2 className="name">
                        {this.props.data[this.props.index].name.first} {this.props.data[this.props.index].name.last}
                    </h2>

                    <div className="top-three-categories">
                        <p className='bold'>From:</p>
                        <p>{this.props.data[this.props.index].city}, {this.props.data[this.props.index].country}</p>
                    </div>

                    <div className="top-three-categories">
                        <p className='bold'>Job Title:</p>
                        <p>{this.props.data[this.props.index].title}</p>
                    </div>

                    <div className="top-three-categories">
                        <p className='bold'>Employer:</p>

                        <p>{this.props.data[this.props.index].employer}</p>
                    </div>

                    <div className='fav-movies'>
                        <p className='bold'> Favorite Movies: </p>
                        <ol className="list">
                            <li>{this.props.data[this.props.index].favoriteMovies[0]}</li>
                            <li>{this.props.data[this.props.index].favoriteMovies[1]}</li>
                            <li>{this.props.data[this.props.index].favoriteMovies[2]}</li>
                        </ol>
                    </div>

                </div>
            </div>
        )
    }
}


// {this.props.data[this.props.index].city}