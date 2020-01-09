import React, { Component, Fragment } from 'react'
import Check from '../components/Check'
import Bounce from 'react-reveal/Bounce'



export default class Play extends Component {
    state={
        questions: {},
        time: 15,
        questionNum: 1,
        answerComponent: '',
        answer: '',
        score: 0

        
    }
    timer(){
        setInterval(()=>{
        if (this.state.time <= 0)return
         this.setState({
             time: this.state.time - 1
            })
        }, 1000)
    }

    componentDidMount(){
        this.setState({
            questions: this.props.questions
        })
        this.timer()
    }
  
    // the function that checks the answer 
    checkAns(a){
      let answer = this.state.questions[this.state.questionNum - 1].correct_answer
      if (a === answer){
          this.setState({
              answer : answer,
              answerComponent: 'correct',
              score: this.state.score + 1,
              time: -1
          })
      }else if(a !== answer){
          this.setState({
              answer: answer,
              answerComponent: 'wrong',
              time:  - 1
          })
      }
    }

    // checking the game state to continue or not 
    continue(){
        let passed 
        if (this.state.questionNum === 10){
            this.state.score <= 6 ? passed = 'failed' : passed = 'passed'
            this.props.finished(passed)
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

        let questions = <Fragment>
                       
                        <div className='contents'>
                        
                        <h3>Question {this.state.questionNum}</h3>
                        <Bounce left>
                        <h3 className='question'>{decodeURIComponent(qtext)}</h3>
                        </Bounce>
                        </div>
                       
                        <Check
                        outOfTime={this.state.time}
                        answerComponent={this.state.answerComponent}
                        continue = {()=>{this.continue()}}
                        checkAns={(a)=>{this.checkAns(a)}}
                        answer={this.state.answer}
                        />
                      </Fragment>
        return (

            
           <Fragment>
               <div className='container'>
               <div className='header'>
               <h1>Trivia</h1>
               <div className='row'>
               <div className='col-md-4'>
               <h5>Level: <b>{this.props.level.map((i, item)=>{
                    
               })}</b></h5>
               </div>
               <div className='col-md-4'>
               <h5> Time left: <b>{this.state.answer === "True" ? 0 : this.state.answer === "False" ? 0 : this.state.time}</b></h5>
               </div>
               <div className="col-md-4">
                <h5>Score: <b>{this.state.score}</b></h5>
              </div>
               </div>
               </div>
               {questions}
               </div>
           </Fragment>

          
        )}

}
