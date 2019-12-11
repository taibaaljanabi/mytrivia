import React, { Component } from 'react'
import {token, category, levels, setURL} from './assets/config'
import Welcome from './container/Welcome'
import { throwStatement } from '@babel/types';

export default class App extends Component {
  state={
    data: '',
    token: '',
    categories: {},
    sCategory: '',
    level: levels,
    sLevel: 'easy',
    url: setURL,
    gameState: 'start',
    passed: false,
    gameLevel: 1
  }
   async componentDidMount(){
   this.setState({
     token : await token(),
     category: await category()
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

changeGameState(c){
  if(c === 'play'){
  //  getData()
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
getData(){
  
}

  render() {
    console.log(this.state.token)
    console.log(this .state.categories)
    console.log(this.state.level)
   
    return (
      <div>
        {this.state.gameState === 'start'?
         <Welcome
         categories = {this.state.categories}
         level={this.state.level}
         selectedCategory = {this.state.sCategory}
         selectedLevel={this.state.sLevel}
         choosing = {(el,name) => this.choosing(el,name)}
          /> 
         : null}
      </div>
    )
  }
}

