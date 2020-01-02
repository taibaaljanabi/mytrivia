import React, { Component } from 'react'

export default class Play extends Component {
    state={
        questions: {},
        time: 15,
        questionNum: ''
    }

    componentDidMount(){
        this.setState({
            questions: this.props.questions
        })
        this.timer()
    }
    timer(){
        setInterval(()=>{
        if (this.state.time <= 0){
            this.setState({time: this.state.time - 1})
        }
        }, 1000)
    }
    render() {
        return (
            <div>
                <h1>{this.state.questions}</h1>
            </div>
        )
    }
}
