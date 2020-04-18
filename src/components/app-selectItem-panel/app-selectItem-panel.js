import React, { Component } from 'react'
import './app-selectItem-panel.css'
import Spinner from '../spinner'

export default class AppSelectItemPanel extends Component {
   

  state = {
    itemList: null
  }

  componentDidMount() {
    const {getData} = this.props;
    getData()
      .then((itemList) => {
        this.setState({ itemList })
      })
  }

  renderItems(arr) {
    return arr.map((item, i ) => {
      return (
        <li className="list-group-item" key={i} onClick={() => this.props.onCharSelected(41+i)}>
          {item.name}
        </li>
      )
    })
  }

  render() {
    const { itemList } = this.state;
    
    if (!itemList) {
      return <Spinner />
    }

    let items = this.renderItems(itemList)

    return (
      <ul className="item-list list-group col-4">
       {items}
      </ul>
    )
  }
}