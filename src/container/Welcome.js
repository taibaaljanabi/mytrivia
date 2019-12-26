import React, { Component, Fragment } from 'react'
import Header from '../components/Header'
import Options from '../components/Options'


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
                        <Options
                        name={'category'}
                        categories ={this.props.categories}
                        selected = {this.props.selectedCat}
                        supChanged = {(el,name) =>{
                            this.props.choosing(el,name)
                        }}
                        />

                        <Options
                        name={'level'}
                        categories = {this.props.level}
                        selected={this.props.selectedLev}
                        supChanged = {(el,name) =>{
                            this.props.choosing(el,name)
                        }}
                        />
                        
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
