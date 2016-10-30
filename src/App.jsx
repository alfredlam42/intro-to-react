import '../lib/app/public/styles.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Starter from './Starter.jsx'


class App extends Component{

  render() {
    var pokemonList = {
      'Bulbasaur': 'Grass',
      'Squirtle' : 'Water',
      'Charmander': 'Fire'
    }

    var pokemons = Object.keys(pokemonList).map(function(pokemon, i){
      return <Starter key={i} pokemon={pokemon} pokemonType={pokemonList[pokemon]} />
    })

    return(
      <div className='appWrapper'>
        {pokemons}
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('root'))
