import React from 'react';

import { Icon, Item } from "semantic-ui-react";

const PlayerCard = ({ player }) => (
  // <Grid.Column>
    <Item>
      <Item.Image size="small" src={player.image_url} />

      <Item.Content verticalAlign="middle">
        <Item.Header as="a">
          {player.last_name}, {player.first_name}
        </Item.Header>
        <Item.Description>
          {player.team.conference} / {player.team.abbreviation} /{" "}
          {player.position}
        </Item.Description>
        <Item.Extra>
          <Icon color="green" name="check" /> {player.id} Votes
        </Item.Extra>
      </Item.Content>
    </Item>
  // </Grid.Column>

  // <div className="PlayerCard">
  //   <img
  //     src={player.image_url}
  //     alt={player.last_name}
  //     className="PlayerImage"
  //   />
  //   <h3>
  //     {player.last_name}, {player.first_name}
  //     <br />
  //     <small>
  //       {player.team.conference} / {player.team.abbreviation} / {player.position}
  //     </small>
  //   </h3>
  // </div>
);

export default PlayerCard;
