import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }


  handleClick = () => {
    const newColor = this.props.currentColor()
    this.setState({
      color: newColor
    })
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.handleClick}>
      </div>
    )
  }
}

// onClick evoke the function handleClick which will set the state to the Matrix's current state (this works because even though it is a prop of Cell, the currentColor function returns a value that is bound to the Matrix, so it will always refer to that value of the Matrix)

// can't change something in render while running the server!
