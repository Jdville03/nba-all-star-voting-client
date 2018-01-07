import React from 'react';
import PlayerFormModal from '../containers/PlayerFormModal';
import DeleteConfirmModal from '../containers/DeleteConfirmModal';
import { Button, Card, Label } from 'semantic-ui-react';

const PlayerCardButtons = ({ player, players, teams, upVotePlayer, removePlayer }) => {
  
  const ButtonColor = player.team.conference === "Western" ? "red" : "blue";

  return (
    <Card.Content extra>
      <Button as="div" labelPosition="right" floated="left" size="tiny" onClick={() => upVotePlayer(player.id, player.votes + 1)}>
        <Button basic color={ButtonColor} size="tiny" compact>
          Vote
        </Button>
        <Label as="a" color={ButtonColor} pointing="left">
          {player.votes}
        </Label>
      </Button>
      <DeleteConfirmModal player={player} removePlayer={removePlayer} />
      <PlayerFormModal player={player} players={players} teams={teams} />        
    </Card.Content>  
  );  
};

export default PlayerCardButtons;
