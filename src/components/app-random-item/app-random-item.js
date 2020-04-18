import React, { Component } from 'react';
import './app-random-item.css';
import GotService from '../../services/gotService'
import Spinner from '../spinner'
import ErrorMessage from '../error-message'

export default class AppRandomItem extends Component {
   
    gotService = new GotService();

    state = {
        char: {},
        loading: true,
        error: false
    }

    componentDidMount(){
        this.updateChar();
        this.timerId = setInterval(this.updateChar, 3500);
    }
    componentWillUnmount(){
        clearInterval(this.timerId);
        console.log("dell");
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
        this.noData(this.state.char)
    }
    
    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * 230 + 10);
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    noData = (char) =>{
        for(let key in char){
            if(char[key].trim().length === 0){
                 char[key]= 'Data not found'
            }
        }
      this.setState({char})
        
    }
       

    render() {
        const {randomPoupap} = this.props;
        const { char, loading, error } = this.state;
        if(!randomPoupap){
            return null;
        }
        let err = error ? <ErrorMessage/>: null;
        let spinner = loading ? <Spinner/>: null;
        let content = !(loading || error) ? <View char={char} /> : null;

        return (
            <div className=" col-4 card text-white bg-primary  randomCard">
                {err}
                {spinner}
                {content}
            </div>
        )
    }
}

const View = ({ char }) => {
    const { name, gender, culture, born, died } = char;
    return (
        <span>
            <div className="card-title">Random Char</div>
            <div className="card-body">
                <h4 className="card-title">Name:  {name}</h4>
                <p className="card-text">Gender:  {gender}</p>
                <p className="card-text">Culture:  {culture}</p>
                <p className="card-text">Born:  {born}</p>
                <p className="card-text">Died:  {died}</p>
            </div>
        </span>

    )
}