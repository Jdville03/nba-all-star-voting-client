import React from 'react';
import { Button, Icon, Label } from 'semantic-ui-react';


const VotingButton = ({ player, upVotePlayer }) => {
  const ButtonColor = player.team.conference === "Western" ? "red" : "blue";

  return (
    <Button as="div" labelPosition="right" onClick={() => upVotePlayer(player.id, player.votes + 1)}>
      <Button basic color={ButtonColor}>
        <Icon name="check" />
        Vote
      </Button>
      <Label as="a" color={ButtonColor} pointing="left">
        {player.votes}
      </Label>
    </Button>
  );  
};

export default VotingButton;
