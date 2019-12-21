import React, { Component, Fragment } from 'react'

export default class Welcome extends Component {
     
    click(){
        this.props.click('play')
    }


    render() {
        
        return (
            <div>
                <h1>Welcome to this stupid trivia</h1>
                {/* <h2>{this.props.selectedLev}</h2> */}
                {/* <h2>{this.props.token}</h2> */}
               {/* <h2>{this.props.categories}</h2>  */}
                
                <option ></option>
            </div>
        )
    }
}
