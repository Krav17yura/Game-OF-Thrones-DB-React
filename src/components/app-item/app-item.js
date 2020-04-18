import React, { Component } from 'react'
import './app-item.css'
import gotService from '../../services/gotService'

export default class AppItem extends Component{
    gotService = new gotService();

    state={
        char: null
    }

    componentDidMount(){
        this.updateChar();
    }

    componentDidUpdate(prevProps){
           if(this.props.selectedChar !== prevProps.selectedChar){
               this.updateChar();
           }
    }

    updateChar(){
        const {selectedChar} = this.props;
        if(!selectedChar){
            return
        }

        this.gotService.getCharacter(selectedChar)
        .then( (char) => {
            for(let key in char){
                if(char[key].trim().length === 0){
                     char[key]= 'Data not found'
                }
            }
            this.setState({char})
        })
    }
  
    render(){

        if(!this.state.char){
            return <span className="select-error">Please select a character</span>
        }

        const {name, gender, born, died, culture} = this.state.char

        return(
            <div className=" col-4 card text-white bg-primary sm-2 randomCard max"  >
            <div className="card-title">Selectet Char</div>
            <div className="card-body">
                <h4 className="card-title">Name:  {name}</h4>
                <p className="card-text">Gender:  {gender}</p>
                <p className="card-text">Culture:  {culture}</p>
                <p className="card-text">Born:  {born}</p>
                <p className="card-text">Died:  {died}</p>
            </div>
        </div>
        )
    }
}