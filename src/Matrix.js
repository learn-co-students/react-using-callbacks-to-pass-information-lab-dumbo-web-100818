import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
  }

  state = {
    selectedColor: ""
  }

   changeColor = (e, color) => {
    this.setState({
      selectedColor: color
    })
  }

  changeColorofCell = () => (this.state.selectedColor)

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} colorOfCell = {this.changeColorofCell} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    console.log(this.props.values)
    return (

      <div id="app">
        <ColorSelector colorChangingFunction = {this.changeColor}/>
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
