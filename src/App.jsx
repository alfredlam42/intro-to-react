import '../lib/app/public/styles.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Starter from './Starter.jsx';
import Team from './Team.jsx';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      team: [],
    }
  }

  addToTeam(pokemon, that){
    var currentTeam = that.state.team;
    currentTeam.push(pokemon);
    that.setState({team: currentTeam});
  }

  render() {
    var that = this;

    var pokemonList = {
      'Bulbasaur': 'Grass',
      'Squirtle' : 'Water',
      'Charmander': 'Fire'
    }

    var pokemons = Object.keys(pokemonList).map(function(pokemon, i){
      return <Starter key={i} pokemon={pokemon} pokemonType={pokemonList[pokemon]} addToTeam={that.addToTeam} that={that}/>
    })

    return(
      <div className='appWrapper'>
        {pokemons}
        <Team team={this.state.team}/>
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('root'))
