import React, { Component } from 'react';
import Buttons from './Button';
import Display from './counter';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  increase = () => {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  decrease = () => {
    this.setState({
      counter: this.state.counter > 0 ? --this.state.counter : this.state.counter
    })
  }

  keyWatchers(e) {
    const keyActionPairs = {
      38: this.increase,
      40: this.decrease
    }
    keyActionPairs[e.keyCode] ? keyActionPairs[e.keyCode]() : () => { };
  }

  // keyPress = e =>
  //   (this.keyActionPairs[e.keyCode]) ? this.keyActionPairs[e.keyCode]() : () => { };

  componentDidMount = () => {
    document.addEventListener('keydown', this.keyPress);
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <h1>simple golden acorn app</h1>
        <button functions={
          {
            add: this.add,
            eat: this.eatOne,
            keyWatchers: this.keyWatchers
          }
        }>
        </button>
      </div>
    )
  }

  // render() =>

  //   (
  //     <div>
  //       <h1>Simple Golden Acorn App</h1>
  //       <Buttons name="Buy One" onClick={this.increase} />
  //       <Display counter={this.state.clicks} />
  //       <Buttons name="Eat One" onClick={this.decrease} />
  //     </div>
  //   )
};

export default App;
