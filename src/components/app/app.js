import React, { Component } from 'react';
import './app.css';

import AppHeader from '../app-header'
import AppSortButtons from '../app-sort-buttons'
import AppRandomItem from '../app-random-item'
import AppToogleButton from '../app-toogle-button'
import AppSelectItemPanel from '../app-selectItem-panel';
import AppItem from '../app-item'
import gotService from '../../services/gotService'

export default class App extends Component {
     state = {
        randomPoupap: true,
        selectedChar: 120
    }
    gotService = new gotService();

    randomPoupapToggle = () => {
        this.setState({
            randomPoupap: !(this.state.randomPoupap)
        })
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }


    render() {
        return (
            <div className="kek">
                <div className="container">
                    <div className="row">
                        <AppHeader />
                    </div>
                    <div className="row ">
                        <AppSortButtons />
                    </div>
                    <div className='row  pb-3'>
                        <AppRandomItem randomPoupap={this.state.randomPoupap} />
                    </div>
                    <div className='row pb-3'>
                        <AppToogleButton
                            randomPoupapToggle={this.randomPoupapToggle} />
                    </div>
                    <div className='row justify-content-between between pb-3'>
                        <AppSelectItemPanel onCharSelected={this.onCharSelected} getData={this.gotService.getAllCharacters} />
                        <AppItem selectedChar={this.state.selectedChar} />
                    </div>
                    <div className='row justify-content-between between pb-3'>
                        <AppSelectItemPanel onCharSelected={this.onCharSelected} getData={this.gotService.getAllHouses} />
                        <AppItem selectedChar={this.state.selectedChar} />
                    </div>
                    <div className='row justify-content-between between pb-3'>
                        <AppSelectItemPanel onCharSelected={this.onCharSelected} getData={this.gotService.getAllBooks} />
                        <AppItem selectedChar={this.state.selectedChar} />
                    </div>
                </div>
            </div>
        )
    }
}