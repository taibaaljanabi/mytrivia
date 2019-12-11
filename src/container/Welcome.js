import React, { Component } from 'react'

export default class Welcome extends Component {
    render() {
        
        return (
            <div>
                <h1>Welcome to this stupid trivia</h1>
                <h2>{this.props.selectedLevel}</h2>
            </div>
        )
    }
}
