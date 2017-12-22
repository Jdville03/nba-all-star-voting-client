import React from 'react';
import './Players.css';

const Players = ({ players }) => (
  <div className="PlayersContainer">
    <h1>Players Component</h1>
    {players.map(player =>
      <div className="PlayerCard" key={player.id}>
        <img src={player.image_url} alt={player.last_name} className="PlayerImage" />
        <h3>{player.first_name} {player.last_name}</h3>
        <p>#{player.jersey_number} - {player.position}</p>
      </div>  
    )}
  </div>
);

export default Players;