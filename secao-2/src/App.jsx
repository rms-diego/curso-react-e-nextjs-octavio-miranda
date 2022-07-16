import React, { Component } from 'react';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        <p>{count}</p>

        <button
          onClick={() => this.setState({ count: count + 1 })}
          type="button"
        >
          Increment
        </button>
      </div>
    );
  }
}

export default App;
