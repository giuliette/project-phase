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

  // keyPress = e => (this.keyActionPairs[e.keyCode]) ? this.keyActionPairs[e.keyCode]() : () => { };
  render() {
    return (
      <div>
        <Button clickEvent={this.increase} name='get one 🌰'/>
        <Display amount={this.state.counter}/>
        <Button clickEvent={this.decrease} name='eat one 🌰' />
      </div>
    )
  }
}

export default App;
