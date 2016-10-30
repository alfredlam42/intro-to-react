import React, { Component } from 'react';
import '../lib/app/public/starter.css';

class Starter extends Component{
  render(){
    return(
      <div className='starterWrapper'>
        <div className='pokemon'>
          <div className='pokemonName'>Bulbasaur</div>
          <div className='pokemonType'>Grass</div>
        </div>

        <div className='pokemon'>
          <div className='pokemonName'>Squirtle</div>
          <div className='pokemonType'>Water</div>
        </div>

        <div className='pokemon'>
          <div className='pokemonName'>Charmander</div>
          <div className='pokemonType'>Fire</div>
        </div>
      </div>
    )
  }
}

export default Starter;