import React from 'react';
import PlayerListItem from './PlayerListItem';

import { List, Grid, Header, Image, Segment } from 'semantic-ui-react';

const SelectedPlayersList = ({ players }) => {

  const placeholderPlayer = {
    team: { conference: "Eastern" },
    position: "Frontcourt",
    image_url: "https://vote.nba.com/static/media/Logo_NBA_grey.36d9a907.svg",
    votes: 0
  };

  const eastPlayers = players.filter(player => player.team.conference === "Eastern");

  const topEastFrontcourtPlayers = () => {
    let frontcourtPlayers = eastPlayers
      .filter(player => player.position === "Frontcourt" && player.votes > 0)
      .sort((a, b) => b.votes - a.votes)
      .slice(0, 3);
    while (frontcourtPlayers.length < 3) {
      frontcourtPlayers.push(placeholderPlayer);
    }
    return frontcourtPlayers;
  };

  const topEastGuards = () => {
    let guards = eastPlayers
      .filter(player => player.position === "Guard" && player.votes > 0)
      .sort((a, b) => b.votes - a.votes)
      .slice(0, 2);
    while (guards.length < 2) {
      guards.push(Object.assign({}, placeholderPlayer, {
        position: "Guard"
      }));
    }
    return guards;
  };

  const westPlayers = players.filter(player => player.team.conference === "Western");

  const topWestFrontcourtPlayers = () => {
    let frontcourtPlayers = westPlayers
      .filter(player => player.position === "Frontcourt" && player.votes > 0)
      .sort((a, b) => b.votes - a.votes)
      .slice(0, 3);
    while (frontcourtPlayers.length < 3) {
      frontcourtPlayers.push(Object.assign({}, placeholderPlayer, {
        team: { conference: "Western" }
      }));
    }
    return frontcourtPlayers;
  };

  const topWestGuards = () => {
    let guards = westPlayers
      .filter(player => player.position === "Guard" && player.votes > 0)
      .sort((a, b) => b.votes - a.votes)
      .slice(0, 2);
    while (guards.length < 2) {
      guards.push(Object.assign({}, placeholderPlayer, {
        team: { conference: "Western" },
        position: "Guard"
      }));
    }
    return guards;
  };
  
  return (
    <Segment inverted color="black">
      <Header inverted as="h3" textAlign="center">
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
            <Grid columns={2}>
              <Grid.Column>  
                <List divided size="small">
                  {topEastFrontcourtPlayers().map((player, index) =>
                    <PlayerListItem
                      player={player}
                      key={index}
                    />  
                  )}
                </List>
              </Grid.Column>
              <Grid.Column>
                <List divided size="small">
                  {topEastGuards().map((player, index) =>
                    <PlayerListItem
                      player={player}
                      key={index}
                    />  
                  )}
                </List>
              </Grid.Column>
            </Grid>  
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment raised>
            <Header as="h3" dividing textAlign="center">
              <Image src="https://upload.wikimedia.org/wikipedia/en/0/02/Western_Conference_%28NBA%29_logo.gif" />
              Western Conference
            </Header>  
            <Grid columns={2}>
              <Grid.Column>  
                <List divided size="small">
                  {topWestFrontcourtPlayers().map((player, index) =>
                    <PlayerListItem
                      player={player}
                      key={index}
                    />  
                  )}
                </List>
              </Grid.Column>
              <Grid.Column>
                <List divided size="small">
                  {topWestGuards().map((player, index) =>
                    <PlayerListItem
                      player={player}
                      key={index}
                    />  
                  )}
                </List>
              </Grid.Column>
            </Grid>
          </Segment>
        </Grid.Column>  
      </Grid>
    </Segment>
  );
};

export default SelectedPlayersList;
