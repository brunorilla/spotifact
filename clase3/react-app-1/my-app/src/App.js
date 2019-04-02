import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './calculadora.css';

class App extends Component {
  constructor(props){
      super(props)

      // stateful
      this.state = {
          operation: {
              left: null,
              operator: null,
              right: null,
              result: null
          },
          result: 0,
          value: null
      }
  }
  add(){

  }
  clear = () =>{
      this.setState({
          result:0,
          value: null,
          operation: {
              left: null,
              operator: null,
              right: null,
              result: null
          }
      })
  }
  setOperation = (e)=>{
      this.setState({
          operation: {
              ...this.state.operation,
              operator: e.target.value

          }
      })
  }

    setValue = (e)=>{
        if(this.state.operation.operator) {
            this.setState({
                operation : {
                    ...this.state.operation,
                    right: e.target.value
                }
            }, ()=> this.getResult())

        } else {
            this.setState({
                operation: {
                    ...this.state.operation,
                    left: e.target.value
                }
            })
        }
  }
  getResult = () => {
      // hacer la operación matemática
      console.log(eval("Number(this.state.operation.left)"
                            + this.state.operation.operator
                            + "Number(this.state.operation.right)"))
      this.setState({
          operation: {
              ...this.state.operation,
              result: result
          }
      })
  }

  render() {
    return (
      <div className="App">
        <div className="calculator">
            <div className="calculator-screen">
                <p className="calculator-temporal">{this.state.operation.operator}</p>
                <p className="calculator-result">
                    {this.state.operation.left}
                    {this.state.operation.operator}
                    {this.state.operation.right}
                    {this.state.operation.result}
                </p>
            </div>
            <div className="calculator-buttons-wrapper">
                <button className="calculator-button" value="+" onClick={this.setOperation}>Add</button>
                <button className="calculator-button" value="-" onClick={this.setOperation}>Sub</button>
                <button className="calculator-button" value="/" onClick={this.setOperation}>Div</button>
                <button className="calculator-button" value="*" onClick={this.setOperation}>Mul</button>
            </div>
            <div className="row-wrapper">
                <div className="calculator-buttons-wrapper half">
                    <button className="calculator-button-number" value="1" onClick={this.setValue}>1</button>
                    <button className="calculator-button-number" value="2" onClick={this.setValue}>2</button>
                    <button className="calculator-button-number" value="3" onClick={this.setValue}>3</button>
                    <button className="calculator-button-number" value="4" onClick={this.setValue}>4</button>
                    <button className="calculator-button-number" value="5" onClick={this.setValue}>5</button>
                    <button className="calculator-button-number" value="6" onClick={this.setValue}>6</button>
                    <button className="calculator-button-number" value="7" onClick={this.setValue}>7</button>
                    <button className="calculator-button-number" value="8" onClick={this.setValue}>8</button>
                    <button className="calculator-button-number" value="9" onClick={this.setValue}>9</button>
                    <button className="calculator-button-number" value="0" onClick={this.setValue}>0</button>
                </div>
                <div className="calculator-buttons-wrapper half">
                    <button className="calculator-button flex-grow" onClick={()=>this.getResult()}>=</button>
                    <button className="calculator-button flex-grow" onClick={this.clear}>Clear</button>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
