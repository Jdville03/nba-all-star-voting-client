import React from 'react';
import TeamCard from './TeamCard';

import { Card } from 'semantic-ui-react';

const Teams = ({ players, teams, upVotePlayer, removePlayer, selectedPlayers }) => {

  const sortedTeams = teams.sort((a, b) => (
    a.city.localeCompare(b.city) || a.name.localeCompare(b.name)
  ));

  return (
    <Card.Group itemsPerRow={6} doubling>
      {sortedTeams.map(team =>
        <TeamCard
          team={team}
          key={team.id}
        />
      )}
    </Card.Group>
  );
};

export default Teams;
