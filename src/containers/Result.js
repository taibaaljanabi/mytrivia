import React, { Component,Fragment } from 'react';

export default class Result extends Component {
  render() {
    console.log('hello from result')

    let  component = <Fragment>
      <h1>Congratulations!</h1>
      <p>You passed the level</p>
      <p onclick={() => this.props.click('start')}>Play again</p>
    </Fragment>
    if(!this.props.state.passed === true){

     component = <Fragment>
     <h1>Sorry!</h1>
     <p>You did not pass the quiz</p>
     <p onClick={()=> this.props.click('start')}>Play again</p>

      </Fragment>
    }
    return (
     
      <Fragment>
       
      <div className="container">
        <div className="header result">
          {component}
        </div>
      </div>
    </Fragment>
    );
  }
}
