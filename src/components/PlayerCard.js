import React from 'react';
import PlayerCardButtons from './PlayerCardButtons';
import { Card, Image, Label } from 'semantic-ui-react';

const PlayerCard = ({ player, players, teams, upVotePlayer, removePlayer, selectedPlayersIds }) => {
  
  const cardColor = player.team.conference === "Western" ? "red" : "blue";

  const addDefaultSrc = (event) => {
    event.target.src = player.team.image_url;
  }

  const selectedPlayerLabel = () => {
    if (selectedPlayersIds.includes(player.id)) {
      return (
        <Label color={cardColor} corner="right" icon="star" size="mini" />
      );
    }
  }

  return (
    <Card color={cardColor}>
      <Card.Content>
        {selectedPlayerLabel()}
        <Image size="tiny"
          floated="left"
          src={player.image_url}
          onError={addDefaultSrc}
        />
        <Card.Header>
          {player.last_name}, {player.first_name}
        </Card.Header>
        <Card.Meta>
          {player.position}<br />
          {player.team.conference.substring(0, 4)} / {player.team.abbreviation}
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <PlayerCardButtons
          player={player}
          players={players}
          teams={teams}
          upVotePlayer={upVotePlayer}
          removePlayer={removePlayer}
        />
      </Card.Content>
    </Card>
  );
};

export default PlayerCard;
