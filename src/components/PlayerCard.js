import React from 'react';
import PlayerCardButtons from './PlayerCardButtons';

import { Card, Image } from 'semantic-ui-react';

const PlayerCard = ({ player, teams, upVotePlayer, removePlayer }) => {
  const cardColor = player.team.conference === "Western" ? "red" : "blue";

  const addDefaultSrc = (event) => {
    event.target.src = "https://vote.nba.com/static/media/Logo_NBA_grey.36d9a907.svg"
  }

  return (
    <Card color={cardColor}>
      <Card.Content>
        <Image size="tiny" floated="left" src={player.image_url} onError={addDefaultSrc} />
        <Card.Header>
          {player.last_name}, {player.first_name}
        </Card.Header>
        <Card.Meta>
          {player.position}<br />
          {player.team.conference.substring(0, 4)} / {player.team.abbreviation}
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <PlayerCardButtons player={player} teams={teams} upVotePlayer={upVotePlayer} removePlayer={removePlayer} />
      </Card.Content>
    </Card>
  );
};

export default PlayerCard;
