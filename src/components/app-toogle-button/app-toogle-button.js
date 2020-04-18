import React, { Component } from 'react'
import "./app-toogle-button.css"

export default class AppToogleButton extends Component {
     
    render(){
        const {randomPoupapToggle} = this.props
        return(
            <button onClick={randomPoupapToggle} className="btn  btn-primary">Toggle randomCharacter</button>
        )
    }
}