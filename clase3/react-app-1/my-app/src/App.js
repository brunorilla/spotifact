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
              left: 0,
              operator: null,
              right: 0,
              result: 0
          },
          // historial
          history: []
      }
  }
  add(){

  }
  setOperation = (e)=>{
      this.setState({
          operation: {
              ...this.state.operation,
              operator: e.target.value

          }
      })
  }

  clear = () =>{
        this.setState({
            operation: {
                left: 0,
                operator: null,
                right: 0,
                result: 0
            }
        })
    }

  clearHistory = ()=> {
      this.setState({
            history: []
      })
  }


    setValue = (e)=>{
        if(this.state.operation.operator) {
            this.setState({
                operation : {
                    ...this.state.operation,
                    right: Number(this.state.operation.right + e.target.value)
                }
            }, ()=> this.getResult())

        } else {
            this.setState({
                operation: {
                    ...this.state.operation,
                    left: Number(this.state.operation.left + e.target.value)
                }
            })
        }
  }
  getResult = () => {
      // hacer la operación matemática
      let result = (eval("Number(this.state.operation.left)"
                            + this.state.operation.operator
                            + "Number(this.state.operation.right)"))
      this.setState({
          operation: {
              ...this.state.operation,
              result: result
          }
      }, ()=>{
          this.state.history.push(this.state.operation)
          this.forceUpdate()
      })
  }

  render() {

    return (
      <div className="App">
        <div className="calculator">
            <div className="calculator-screen">
                <p className="calculator-temporal">{this.state.operation.result}</p>
                <p className="calculator-result">
                    {this.state.operation.left == 0 ? '' : this.state.operation.left}
                    {this.state.operation.operator}
                    {this.state.operation.right == 0 ? '' : this.state.operation.right}
                </p>
            </div>
            <div className="calculator-history-screen">
                <ul>
                    {this.state.history.map((item, key) => <li>{key={key}} {item.left} {item.operator}  {item.right} = {item.result}</li>)}
                </ul>
            </div>
            <div className="calculator-buttons-wrapper">
                <button className="calculator-button" value="+" onClick={this.setOperation}>+</button>
                <button className="calculator-button" value="-" onClick={this.setOperation}>-</button>
                <button className="calculator-button" value="/" onClick={this.setOperation}>&divide;</button>
                <button className="calculator-button" value="*" onClick={this.setOperation}>&#10006;</button>
            </div>
            <div className="row-wrapper">
                <div className="calculator-buttons-wrapper half">
                    {
                        [0,1,2,3,4,5,6,7,8,9].map(n => <button key={n} className="calculator-button-number" value={n} onClick={this.setValue}>{n}</button>
                        )
                    }
                </div>
                <div className="calculator-buttons-wrapper half">
                    <button className="calculator-button flex-grow" onClick={()=>this.getResult}>=</button>
                    <button className="calculator-button flex-grow" onClick={this.clear}>Clear</button>
                    <button className="calculator-button flex-grow" onClick={this.clearHistory}>C</button>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
