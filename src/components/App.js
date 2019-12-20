import React, { Component } from 'react';
import Timer from './Timer';

class App extends Component {
  render() {
    return (
      <div className='main-container'>
        <h1>Start Here</h1>
        <Timer />
      </div>
    )
  }
};

export default App;
