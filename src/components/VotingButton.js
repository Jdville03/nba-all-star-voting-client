import React from 'react';
import { Button, Icon, Label } from 'semantic-ui-react';

const VotingButton = ({ player }) => (
  <Button as="div" labelPosition="right">
    <Button basic color="green">
      <Icon name="check" />
      Vote
    </Button>
    <Label as="a" color="green" pointing="left">
      {player.id}
      {/* {player.votes} */}
    </Label>
  </Button>
);

export default VotingButton;
