import React from 'react';
import PlayerListItem from './PlayerListItem';

import { List, Grid, Header, Image, Segment } from 'semantic-ui-react';

const SelectedPlayersList = ({ players }) => {

  const eastPlayers = players.filter(player => player.team.conference === "Eastern");

  const topEastFrontcourtPlayers = eastPlayers
    .filter(player => player.position === "Frontcourt")
    .sort((a, b) => b.votes - a.votes)
    .slice(0, 3);
  
  const topEastGuards = eastPlayers
    .filter(player => player.position === "Guard")
    .sort((a, b) => b.votes - a.votes)
    .slice(0, 2);
  
  const topEastPlayers = topEastFrontcourtPlayers.concat(topEastGuards);
  
  const westPlayers = players.filter(player => player.team.conference === "Western");

  const topWestFrontcourtPlayers = westPlayers
    .filter(player => player.position === "Frontcourt")
    .sort((a, b) => b.votes - a.votes)
    .slice(0, 3);

  const topWestGuards = westPlayers
    .filter(player => player.position === "Guard")
    .sort((a, b) => b.votes - a.votes)
    .slice(0, 2);
  
  const topWestPlayers = topWestFrontcourtPlayers.concat(topWestGuards);
  
  return (
    <Segment inverted color="black">
      <Header inverted as="h3" dividing textAlign="center">
        <Header.Content>
          Current Selected Starters
          <Header.Subheader>
            Most voted 3 frontcourt players and 2 guards from each conference
          </Header.Subheader>
        </Header.Content>
      </Header>  
      <Grid columns={2} stackable>
        <Grid.Column>
          <Segment raised>
            <Header as="h3" dividing textAlign="center">
              <Image src="https://upload.wikimedia.org/wikipedia/en/e/ed/Eastern_Conference_%28NBA%29_logo.gif" />
              Eastern Conference
            </Header>  
            <List>
              {topEastPlayers.map(player =>
                <PlayerListItem
                  player={player}
                  key={player.id}
                />  
              )}
            </List>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment raised>
            <Header as="h3" dividing textAlign="center">
              <Image src="https://upload.wikimedia.org/wikipedia/en/0/02/Western_Conference_%28NBA%29_logo.gif" />
              Western Conference
            </Header>  
            <List>
              {topWestPlayers.map(player =>
                <PlayerListItem
                  player={player}
                  key={player.id}
                />  
              )}
            </List>
          </Segment>
        </Grid.Column>  
      </Grid>
    </Segment>
  );
};

export default SelectedPlayersList;
