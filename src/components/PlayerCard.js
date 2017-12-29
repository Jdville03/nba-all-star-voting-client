import React from 'react';
import VotingButton from './VotingButton';

import { Card, Image } from 'semantic-ui-react';

const PlayerCard = ({ player }) => {
  const cardColor = player.team.conference === "Western" ? "red" : "blue";

  return (
    <Card color={cardColor}>
      <Image size="small" centered src={player.image_url} />
      <Card.Content>
        <Card.Header>
          {player.last_name}, {player.first_name}
        </Card.Header>
        <Card.Meta>
          {player.position}
        </Card.Meta>
        <Card.Description>
          {player.team.conference} / {player.team.abbreviation}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <VotingButton player={player} />
      </Card.Content>
    </Card>
  );
};

export default PlayerCard;
