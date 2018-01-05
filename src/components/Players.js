import React from 'react';
// import { Route } from 'react-router-dom';
import PlayerCard from './PlayerCard';
import PlayerFormModal from '../containers/PlayerFormModal';

import { Card } from 'semantic-ui-react';

// const Players = ({ players, teams, upVotePlayer, removePlayer, selectedPlayers, match }) => {
const Players = ({ players, teams, upVotePlayer, removePlayer, selectedPlayers }) => {

  const sortedPlayers = players.sort((a, b) => (
    a.last_name.localeCompare(b.last_name) || a.first_name.localeCompare(b.first_name) || a.id - b.id
  ));

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
      {/* <Route path={`${match.url}/new`} render={() => (
        <Card>
          <PlayerFormModal teams={teams} />
        </Card>  
      )} /> */}
      <Card>
        <PlayerFormModal teams={teams} />
      </Card>
      {sortedPlayers.map(player =>
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
