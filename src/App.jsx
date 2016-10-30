import '../lib/app/public/styles.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Starter from './Starter.jsx'


class App extends Component{
  render() {
    return(
      <div className='appWrapper'>
        <Starter pokemon='Bulbasaur' pokemonType='Grass' />
        <Starter pokemon='Squirtle' pokemonType='Water' />
        <Starter pokemon='Charmander' pokemonType='Water' />
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('root'))
