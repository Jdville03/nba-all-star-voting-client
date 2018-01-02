import React from 'react';

import { Icon, Image, Label, List } from 'semantic-ui-react';

const PlayerListItem = ({ player }) => {
  const labelColor = player.team.conference === "Western" ? "red" : "blue";

  const addDefaultSrc = (event) => {
    event.target.src = "https://vote.nba.com/static/media/Logo_NBA_grey.36d9a907.svg"
  }

  return (
    <List.Item>
      <Image
        size="tiny"  
        src={player.image_url}
        onError={addDefaultSrc}
      />
      <List.Content>
        <List.Header>
          {player.last_name}, {player.first_name}
        </List.Header>
        <List.Description>
          {player.team.conference.substring(0, 4)} / <a>{player.team.abbreviation}</a> / {player.position}
          <p>
            <Label basic color={labelColor} size="small">
              <Icon name="check" />{player.votes}
            </Label>
          </p>  
        </List.Description>
      </List.Content>
    </List.Item>    
  );
};

export default PlayerListItem;
