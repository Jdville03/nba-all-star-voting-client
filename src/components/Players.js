import React from 'react';
import PlayerCard from './PlayerCard';
import PlayerFormModal from '../containers/PlayerFormModal';
import { Card, Header, Image } from 'semantic-ui-react';

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

  const headerText = () => {
    if (match.params.teamId) {
      const team = teams.find(team => team.id === parseInt(match.params.teamId, 10));
      if (team) {
        return (
          <Header as="h3" textAlign="center">
            <Image src={team.image_url} />
            {team.city} {team.name}
          </Header>
        );
      }  
    }
  }

  return (
    <div>
      {headerText()}
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
    </div>
  );
};

export default Players;
