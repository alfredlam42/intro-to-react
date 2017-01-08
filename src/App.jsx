import '../lib/app/public/styles.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Starter from './Starter.jsx';
import Team from './Team.jsx';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
    }
  }

  changeName(event){
    this.setState({name: event.target.value});
  }

  render() {
    return(
      <div className='appWrapper'>
        My name is {this.state.name}
        <br />
        <input onChange={this.changeName.bind(this)} />
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('root'))
