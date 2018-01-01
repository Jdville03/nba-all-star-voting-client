import React from 'react';
import PlayerCardButtons from './PlayerCardButtons';

import { Card, Image } from 'semantic-ui-react';

const PlayerCard = ({ player, teams, upVotePlayer }) => {
  const cardColor = player.team.conference === "Western" ? "red" : "blue";

  const addDefaultSrc = (event) => {
    event.target.src = "https://vote.nba.com/static/media/Logo_NBA_grey.36d9a907.svg"
  }

  return (
    <Card color={cardColor}>
      <Image size="small" centered src={player.image_url} onError={addDefaultSrc} />
      <Card.Content>
        <Card.Header>
          {player.last_name}, {player.first_name}
        </Card.Header>
        <Card.Meta>
          {player.position}
        </Card.Meta>
        <Card.Description>
          {player.team.conference.substring(0, 4)} / {player.team.abbreviation}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <PlayerCardButtons player={player} teams={teams} upVotePlayer={upVotePlayer} />
      </Card.Content>
    </Card>
  );
};

export default PlayerCard;
