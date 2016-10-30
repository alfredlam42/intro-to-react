import '../lib/app/public/styles.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Starter from './Starter.jsx'


class App extends Component{
  render() {
    return(
      <Starter />
    )
  }
};

ReactDOM.render(<App />, document.getElementById('root'))
