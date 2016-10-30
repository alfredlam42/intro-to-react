import React, { Component } from 'react';
import '../lib/app/public/starter.css';

class Starter extends Component{
  render(){
    var pokemon = this.props.pokemon;
    var pokemonType = this.props.pokemonType;

    return(
      <div className='starterWrapper'>
        <div className='pokemon'>
          <div className='pokemonName'>{pokemon}</div>
          <div className='pokemonType'>{pokemonType}</div>
        </div>
      </div>
    )
  }
}

export default Starter;