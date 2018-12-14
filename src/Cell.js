import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClick = () => {
  let newColor = this.props.colorOfCell()
  this.setState({
    color: newColor
  })
}


  render() {
    return (
      <div onClick= {this.handleClick} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}
