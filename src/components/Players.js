import React from 'react';
import PlayerCard from './PlayerCard';
import PlayerFormModal from '../containers/PlayerFormModal';

import { Card } from 'semantic-ui-react';

const Players = ({ players, teams, upVotePlayer, removePlayer }) => {

  const sortedPlayers = players.sort((a, b) => (
    a.last_name.localeCompare(b.last_name) || a.first_name.localeCompare(b.first_name) || a.id - b.id
  ));

  return (
    <Card.Group itemsPerRow={3} doubling stackable>
      {sortedPlayers.map(player =>
        <PlayerCard
          player={player}
          teams={teams}
          key={player.id}
          upVotePlayer={upVotePlayer}
          removePlayer={removePlayer}
        />
      )}
      <Card>
        <PlayerFormModal teams={teams} />
      </Card>
    </Card.Group>
  );
};

export default Players;
