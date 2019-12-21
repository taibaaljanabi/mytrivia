import React, { Component } from 'react'
import {token, category, levels, setURL} from './assets/config'
import Welcome from './container/Welcome'
import axios from 'axios'
import Play from './container/Play'
import Result from './container/Result'

export default class App extends Component {
  state={
    data: '',
    token: '',
    categories: {},
    sCategory: '',
    level: levels,
    sLevel: '',
    url: setURL,
    gameState: 'start',
    passed: false,
    gameLevel: 1,
    questions: {}
  }
   async componentDidMount(){
   this.setState({
     token : await token(),
     categories: await category()
   })
  }
  choosing (el, name){
    if (name === 'category'){
      this.setState({
       sCategory: el
      })
    }
    if(name === 'level'){ 
      this.setState({
        sLevel: el
      })
    }
  }

  getData = async() =>{
    let url = setURL(this.state.sCategory, this.state.sLevel, this.state.token)
    let res = await axios.get(url.url)
    if (res.data.response_code !== 0){
      res = await axios.get(url.backupURL)
      if (res.data.results){
        this.setState({
          questions: res.data.results,
          gameState: 'play'
        })
      }
    }
    if(res.data.results){
      this.setState({
        questions: res.data.results,
        gameState: 'play'
      })
    }
  
  }


changeGameState(c){
  if(c === 'play'){
   this.getData()
  }
  if(c === 'failed'){
    this.setState({
      gameState: 'end',
      passed: false
    })
  }
  if(c === 'passed'){
    this.setState({
      passed: true,
      gameLevel: this.state.gameLevel + 1,
      gameState: 'end'

    })
  }
  if(c === 'start'){
    this.setState({
      gameState: 'start',
      passed: false
    })
  }
}


  render() {
    console.log(this.state.token)
    console.log(this .state.categories)
    console.log(this.state.level)
    console.log(this.state.questions)
    console.log(this.state.gameState)

    let game = this.state.gameState === 'play' ? 
       <Play 
       questions = {this.state.questions}
       level= {this.state.level}
       finished = {(c, score) => this.changeGameState(c,score)}
       />: 
       this.state.gameState === 'end'?
       <Result 
        state = {this.state}
        click = {(c)=> this.changeGameState(c)}
        />: 
        this.state.gameState === 'start'?
        <Welcome 
        categories={this.state.categories}
        level = {this.state.level}
        selectedCat = {this.state.sCategory}
        selectedLev = {this.state.sLevel}
        click = {(c)=> this.changeGameState(c)}
        choosing = {(el, name)=> this.choosing(el,name)}/>
        : null


   
    return (
      <div>
        {/* {this.state.gameState === 'start'?
         <Welcome
         category = {this.state.categories}
         level={this.state.level}
         selectedCategory = {this.state.sCategory}
         selectedLevel={this.state.sLevel}
         choosing = {(el,name) => this.choosing(el,name)}
         token = {this.state.token}
          /> 
         : null} */}
         {game}
      </div>
    )
  }
}

