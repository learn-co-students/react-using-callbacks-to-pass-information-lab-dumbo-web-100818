import React, { Component } from 'react';

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      const handleClick = (event) => {this.props.callBackFromParent(str)}
      return <div onClick={handleClick}  key={idx} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )

  // We set const handleClick to a callback function so that we can change the state of the Matrix.
  // On click of a particular color swatch, execute the callBackFromParent function and pass in the corresponding string aka hexcode (which will change the state.color of Matrix)

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }

}
