import React, { Component,Fragment } from 'react';
import Bounce from 'react-reveal/Bounce'

export default class Result extends Component {
  render() {
    console.log('hello from result')

    let  component = <Fragment>
      <h1>Congratulations!</h1>
      <p>You passed the level</p>
      <p onClick={() => this.props.click('start')}>Play again</p>
    </Fragment>
    if(!this.props.state.passed === true){

     component = <Fragment>
       <Bounce left>
     <h1>Sorry!</h1>
     <p>You did not pass the quiz</p>
     </Bounce>
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
