import React, { Component } from 'react'

export default class Play extends Component {
    state={
        questions: {},
        time: 15,
        questionNum: 1,
        answerComponent: '',
        answer: '',
        score: 0

        
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
    // the function that checks the answer 
    checkAns(a){
      let answer = this.state.questions[this.state.questionNum - 1].correct_answer
      if (a === answer){
          this.setState({
              answer : answer,
              answerComponent: 'You are correct',
              score: this.state.score + 1,
              time: -1
          })
      }else if(a !== answer){
          this.setState({
              answer: answer,
              answerComponent: 'You are wrong',
              time: -1
          })
      }
    }

    // checking the game state to continue or not 
    continue(){
        let passed = ''
        if (this.state.questionNum === 10){
            this.state.score <= 6 ? passed = 'Failed' : passed = 'Passed'
        }else{
            this.setState({
                time: 15,
                answer : '',
                questionNum: this.state.questionNum + 1,
                answerComponent: ''
            })
        }
    }





    render() {
        let qtext = ''
        if(this.state.questions.length > 0) {
            qtext = this.state.questions[this.state.questionNum - 1].question
        }
        console.log(this.state.questions[this.state.questionNum])
        return (

            
            <h1>{decodeURIComponent(qtext)}</h1>

          
        )
    }
}
