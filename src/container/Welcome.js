import React, { Component, Fragment } from 'react'
import Header from '../components/Header'


export default class Welcome extends Component {
     
    click(){
        this.props.click('play')
    }


    render() {
        
        return (
            <Fragment>
                <div className='container'>
                <Header/>
                <div className='selectOptions'>
                <h1>Select game options</h1>
                

                
                
                <button 
                onClick={()=>this.click()} 
                type='button' 
                className='btn btn-primary'
                >Play Game</button>
                </div>
                </div>
             </Fragment>
        )
    }
}
