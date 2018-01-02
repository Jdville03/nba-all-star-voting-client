import React from 'react';

import { Icon, Image, Label, List } from 'semantic-ui-react';

const PlayerListItem = ({ player }) => {
  const labelColor = player.team.conference === "Western" ? "red" : "blue";

  const addDefaultSrc = (event) => {
    event.target.src = "https://vote.nba.com/static/media/Logo_NBA_grey.36d9a907.svg"
  }

  const nameText = player.id ? `${player.last_name}, ${player.first_name}` : "TBD";
  
  const teamText = player.id ? player.team.abbreviation : "Team";

  return (
    <List.Item>
      <Image
        size="tiny"  
        src={player.image_url}
        onError={addDefaultSrc}
      />
      <List.Content>
        <List.Header>
          {nameText}
        </List.Header>
        <List.Description>
          {player.team.conference.substring(0, 4)} / {teamText} / {player.position}<br />
          <Label basic color={labelColor} size="small">
            <Icon name="check" />{player.votes}
          </Label>
        </List.Description>
      </List.Content>
    </List.Item>    
  );
};

export default PlayerListItem;
