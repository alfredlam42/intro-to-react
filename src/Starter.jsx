import React, { Component } from 'react';
import '../lib/app/public/starter.css';
class Starter extends Component{
  render(){
    var pokemon = this.props.pokemon;
    var pokemonType = this.props.pokemonType;

    return(
      <div className='starterWrapper'>
        <button className='pokemon' onClick={() => this.props.addToTeam(pokemon)}>
          <div className='pokemonName'>{pokemon}</div>
          <div className='pokemonType'>{pokemonType}</div>
        </button>
      </div>
    )
  }
}

export default Starter;