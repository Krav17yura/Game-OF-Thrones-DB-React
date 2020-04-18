import React, { Component } from 'react';
import './app-sort-buttons.css'

export default class AppSortButtons extends Component {

    render() {

        return (
            <div className="col-4 offset-md-9">
                <button className="btn btn-primary btn-md" type="button">Character</button>
                <button className="btn btn-primary btn-md" type="button">Home</button>
                <button className="btn btn-primary btn-md" type="button">Books</button>
            </div>
        )
    }
}