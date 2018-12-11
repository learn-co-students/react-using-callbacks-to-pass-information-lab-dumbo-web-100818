import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      color: 'fff'
    }
  }

  childCallBack = (childData) => {
    this.setState({
      color: childData
    })
  }
  // We set a callback function here to be given as a prop to child component ColorSelector

  currentColor = () => {
    return this.state.color
  }
  // We set a callback function to here to be given as a prop to child component Cell

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} currentColor={this.currentColor}/>)
  )

  // Upon generation of a row, we create an instance of a Cell component and set its currentColor to the color state of the matrix

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )



  render() {
    return (
      <div id="app">
        <ColorSelector callBackFromParent={this.childCallBack}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

//here (line 42) we give the child access to the BOUND childCallBack function. This is basically saying "I'm your parent and you have access to my function but when you evoke it, the function will be executed in my file."}

Matrix.defaultProps = {
  values: chromeBoi
}
