import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      colorSelected: "#fff"
    }
  }

  setColorSelected = (color) => {
    this.setState({
      colorSelected: color
    })
  }

  getColorSelected = () => (this.state.ColorSelected)

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} getColorSelected={this.getColorSelected}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector setColorSelected={this.setColorSelected} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
