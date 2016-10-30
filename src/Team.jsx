import React, { Component } from 'react';
import '../lib/app/public/team.css';

class Team extends Component{
  render(){
    var team = this.props.team;
    var teamList = team.map(function(pokemon, i){
      return <div key={i} className='team'>{pokemon}</div>
    })

    return(
      <div className='teamWrapper'>
        <div>Current Team</div>
        {teamList}
      </div>
    )
  }
}

export default Team;