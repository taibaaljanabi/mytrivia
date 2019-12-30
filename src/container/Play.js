import React, { Component } from 'react'

export default class Play extends Component {
    state={
        questions: {},
        time: 15
    }

    componentDidMount(){
        this.setState({
            questions: this.props.questions
        })
        this.timer()
    }
    timer(){
        setinterval(()=>{
        if (this.state.time <= 0){
            this.setState

        }
        })
    }
    render() {
        return (
            <div>
                <h1></h1>
            </div>
        )
    }
}
