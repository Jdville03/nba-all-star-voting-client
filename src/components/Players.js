import React from 'react';
import PlayerCard from './PlayerCard';
import PlayerFormModal from '../containers/PlayerFormModal';
import { Card } from 'semantic-ui-react';

const Players = ({ filteredPlayers, players, teams, upVotePlayer, removePlayer, selectedPlayersIds, match }) => {

  const sortedPlayers = filteredPlayers.sort((a, b) =>
    a.last_name.localeCompare(b.last_name) || a.first_name.localeCompare(b.first_name) || a.id - b.id
  );

  return (
    <div>
      <Card.Group itemsPerRow={3} doubling stackable>
        <Card>
          <PlayerFormModal players={players} teams={teams} match={match} />
        </Card>
        {sortedPlayers.map(player =>
          <PlayerCard
            player={player}
            players={players}
            teams={teams}
            key={player.id}
            upVotePlayer={upVotePlayer}
            removePlayer={removePlayer}
            selectedPlayersIds={selectedPlayersIds}
          />
        )}
      </Card.Group>
    </div>
  );
};

export default Players;
