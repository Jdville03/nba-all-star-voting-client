import React from 'react';
import PlayerCard from './PlayerCard';
import PlayerFormModal from '../containers/PlayerFormModal';
import { Card } from 'semantic-ui-react';

const Players = ({ players, teams, upVotePlayer, removePlayer, selectedPlayers, match }) => {

  const sortedAndFilteredPlayers = () => {
    const filteredPlayers = match.params.teamId ? players.filter(player => player.team_id === parseInt(match.params.teamId, 10)) : players;
    return filteredPlayers.sort((a, b) => (
      a.last_name.localeCompare(b.last_name) || a.first_name.localeCompare(b.first_name) || a.id - b.id
    ));
  }

  const selectedPlayersIds = () => {
    let selectedPlayersIds = [];
    return selectedPlayersIds
      .concat(selectedPlayers.eastFrontcourtPlayers.map(player => player.id))
      .concat(selectedPlayers.eastGuards.map(player => player.id))
      .concat(selectedPlayers.westFrontcourtPlayers.map(player => player.id))
      .concat(selectedPlayers.westGuards.map(player => player.id));
  }

  return (
    <Card.Group itemsPerRow={3} doubling stackable>
      <Card>
        <PlayerFormModal teams={teams} match={match} />
      </Card>
      {sortedAndFilteredPlayers().map(player =>
        <PlayerCard
          player={player}
          teams={teams}
          key={player.id}
          upVotePlayer={upVotePlayer}
          removePlayer={removePlayer}
          selectedPlayersIds={selectedPlayersIds()}
        />
      )}
    </Card.Group>
  );
};

export default Players;
