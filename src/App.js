import React, { Component } from 'react';
import Test1 from './Components/Test1/Test1';
import Test2 from './Components/Test2/Test2';
import Test3 from './Components/Test3/Test3';
import './App.scss';
import './App.css';

class App extends Component {
  render() {
    //const s = require('./App.scss');
    return (
      <div>
        <h1>React Motion Testing Example</h1>
        <h2>Example 1</h2>
        <Test1 />
        <hr/>

        <h2>Example 2</h2>
        <Test2 />
        <hr/>

        <h2>Example 3</h2>
        <Test3 />
        <br/>
      </div>
    );
  }
}

export default App;
