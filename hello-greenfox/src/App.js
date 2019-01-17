import React, { Component } from 'react';
import Button from './Button';
import Display from './Display';

class App extends Component {
  state = {
    counter: 0
  }

  increase = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  decrease = () => {
    this.setState({
      counter: this.state.counter > 0 ? --this.state.counter : this.state.counter
    });
  }

  keyWatchers(e) {
    const keyActionPairs = {
      38: this.increase,
      40: this.decrease
    }
    keyActionPairs[e.keyCode] ? keyActionPairs[e.keyCode]() : () => { };
  }

  keyPress = e => (this.keyActionPairs[e.keyCode]) ? this.keyActionPairs[e.keyCode]() : () => { };

  componentDidMount() {
    document.querySelector('body').addEventListener('keydown', );
  }

  render() {
    return (
      <div>
        <Button clickEvent={this.increase} name='get one 🌰 ' />
        <h3><Display counter={this.state.counter} /></h3>
        <Button clickEvent={this.decrease} name='eat one 🌰 ' />
      </div>
    )
  }
}

export default App;
