import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';
import Pluralize from 'pluralize';

const TeamCard = ({ team }) => {
  
  const cardColor = team.conference === "Western" ? "red" : "blue";
  const playersOnBallot = Pluralize("player", team.players.length, true);

  return (
    <Card color={cardColor} as={Link} to={`/teams/${team.id}`}>
      <Image src={team.image_url} size="tiny" centered />
      <Card.Content>
        <Card.Header>
          {team.city} {team.name}
        </Card.Header>
        <Card.Meta>
          {team.conference.substring(0, 4)}
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        {playersOnBallot} on ballot
      </Card.Content>  
    </Card>
  );
};

export default TeamCard;
