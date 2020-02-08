import React from 'react'
import logo from './logo.svg'
import './App.css'
import KeyboardedInput from 'react-touch-screen-keyboard';
import 'react-touch-screen-keyboard/lib/Keyboard.css'; // if you just want css

const CodeToLettersArray = [
  'A','B'
]
// index = letter

const SymbolsToCode = [
  'image1','imag2 ect'
]
// index = symbol
  


class App extends React.Component {
  state = {
    input: '',
    output: '===>test of state change<=='
  }

  handleInput = (e) => {
    // console.log(e.target.value)
    this.setState({input: e.target.value})
  }

  submitToCoder = () => {
    console.log(this.state.input)
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
          <KeyboardedInput
                          enabled
                          required
                          // type={this.props.type}
                          // onChange={this.props.onChange}
                          // onBlur={this.props.onBlur}
                          // onFocus={this.props.onFocus}
                          // value={this.props.value}
                          // min={this.props.min}
                          // max={this.props.max}
                          // step={this.props.step}
                          // name={this.props.name}
                          // inputClassName={this.props.inputClassName}
                          // keyboardClassName={this.props.keyboardClassName}
                          // placeholder={this.props.placeholder}
                          defaultKeyboard="us"
                          // secondaryKeyboard="us" // optional
                          isFirstLetterUppercase={true} // optional, default is `false`
                          uppercaseAfterSpace={true} // optional, default is `false`
                          isDraggable={false} // optional, default is `true`
                          // readOnly={this.props.readOnly} // optional
                          // opacity={0.9} // optional
          />
          {this.state.output}
        </div>
      </div>
    )
  }
}

export default App
