import React from 'react';
import './Players.css';
import PlayerCard from '../components/PlayerCard';

const Players = ({ players }) => (
  <div className="PlayersContainer">
    <h1>Players Component</h1>
    {players.map(player => <PlayerCard player={player} key={player.id} />)}
  </div>
);

export default Players;