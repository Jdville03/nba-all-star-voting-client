import React from 'react';
import { Route } from 'react-router-dom';
import TeamCard from './TeamCard';
import Players from './Players';
import { Card } from 'semantic-ui-react';

const Teams = ({ players, teams, upVotePlayer, removePlayer, selectedPlayers, match }) => {

  const sortedTeams = teams.sort((a, b) => (
    a.city.localeCompare(b.city) || a.name.localeCompare(b.name)
  ));

  return (
    <div>
      <Route exact path={match.url} render={() => (
        <Card.Group itemsPerRow={6} doubling>
          {sortedTeams.map(team =>
            <TeamCard
              team={team}
              key={team.id}
              players={players}
            />
          )}
        </Card.Group>
      )} />
      <Route path={`${match.url}/:teamId`} render={(props) => (
        <Players
          players={players}
          teams={teams}
          upVotePlayer={upVotePlayer}
          removePlayer={removePlayer}
          selectedPlayers={selectedPlayers}
          {...props}
        />
      )} />
    </div>
  );
};

export default Teams;
