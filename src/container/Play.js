import React, { Component } from 'react'

export default class Play extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.questions}</h1>
            </div>
        )
    }
}
