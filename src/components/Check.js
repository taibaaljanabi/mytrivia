import React, {Fragment} from 'react'
import Zoom from 'react-reveal/Zoom';

export default (props) => {
  
  let outOfTime = <div className="container">
                    <div className="header result">
                      <h2>You ran out of time!</h2>
                      <p>Please think faster.</p>
                      <p 
                        className='TFbtn'
                        onClick={()=>props.continue()}>Continue</p>
                    </div>
                  </div>

  let wrong = <div className="container">
                <div className="header result">
                  <h2>You are wrong!</h2>
                  <p>The correct answer is {props.answer} </p>
                  <p 
                    className='TFbtn'
                    onClick={()=>props.continue()}>Continue</p>
                </div>
              </div>

  let right = <div className="container">
                <div className="header result">
                  <Zoom left>
                  <h2>You are correct!</h2>
                  </Zoom>
                  <p></p>
                  <p 
                    className='TFbtn'
                    onClick={()=>props.continue()}>Continue</p>
                </div>
              </div>

  let options = <div className="answers selectOptions row">
                  <div className="col-md-5 btn-ans">
                    <p className='TFbtn'
                    onClick={()=>props.checkAns('True')}>True</p>
                  </div>
                  <div className="col-md-2 btn-ans"></div>
                  <div className = "col-md-5 btn-ans" >
                    <p className='TFbtn'
                      onClick={()=>props.checkAns('False')}>False</p>
                  </div>
                </div> 

  let res = props.outOfTime === 0 ? outOfTime : 
        props.answerComponent === 'correct' ? right : 
        props.answerComponent === 'wrong' ? wrong : options

  return (
    <Fragment>
      {res}
    </Fragment>
  )
}