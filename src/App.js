import React from 'react'
import logo from './logo.svg'
import './App.css'

class App extends React.Component {
  state = {
    input: '',

  }

  handleInput = (e) => {
    // console.log(e.target.value)
    this.setState({input: e.target.value})
  }

  submitToCoder = () => {

  }

  render () {
    console.log(this.state)
    return (
      <div className="App">
        <div className="App-div">
          <h1>Welcome to Ayla's Code converter</h1>
          <p>Simply input what you would like coded into the input below and press submit!</p>
          <textarea onKeyDown={(e)=> this.handleInput(e)} />
          <button onClick={this.submitToCoder} />
          
        </div>
        <div className="App-div">
          <h2>Use the table below to decode your messages</h2>
        </div>
      </div>
    )
  }
}

export default App
