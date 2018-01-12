import React from 'react';
import SelectedPlayerListItem from './SelectedPlayerListItem';
import { Button, Grid, Header, Icon, Image, List, Modal, Segment } from 'semantic-ui-react';

const SelectedPlayersListModal = ({ selectedPlayers }) => {
  
  const placeholderPlayer = {
    team: { conference: "Eastern" },
    position: "Frontcourt",
    image_url: "https://vote.nba.com/static/media/Logo_NBA_grey.36d9a907.svg",
    votes: 0
  };

  const renderEastFrontcourtPlayers = () => {
    let eastFrontcourtPlayers = selectedPlayers.eastFrontcourtPlayers;
    while (eastFrontcourtPlayers.length < 3) {
      eastFrontcourtPlayers = eastFrontcourtPlayers.concat(placeholderPlayer);
    }
    return eastFrontcourtPlayers;
  };

  const renderEastGuards = () => {
    let eastGuards = selectedPlayers.eastGuards;
    while (eastGuards.length < 2) {
      eastGuards = eastGuards.concat(Object.assign({}, placeholderPlayer, {
          position: "Guard"
        }));
    }
    return eastGuards;
  };

  const renderWestFrontcourtPlayers = () => {
    let westFrontcourtPlayers = selectedPlayers.westFrontcourtPlayers;
    while (westFrontcourtPlayers.length < 3) {
      westFrontcourtPlayers = westFrontcourtPlayers.concat(Object.assign({}, placeholderPlayer, {
          team: { conference: "Western" }
        }));
    }
    return westFrontcourtPlayers;
  };

  const renderWestGuards = () => {
    let westGuards = selectedPlayers.westGuards;
    while (westGuards.length < 2) {
      westGuards = westGuards.concat(Object.assign({}, placeholderPlayer, {
          team: { conference: "Western" },
          position: "Guard"
        }));
    }
    return westGuards;
  };

  const modalTriggerButtonIcons = () => {
    let icons = [];
    for (var i = 0; i < 5; i++) {
      icons.push(<Icon name="star" color="blue" size="small" key={i} />);
    }
    icons.push(<Icon name="star" inverted size="small" key={5} />);
    for (var j = 6; j < 11; j++) {
      icons.push(<Icon name="star" color="red" size="small" key={j} />);
    }
    return icons;
  };

  const modalTriggerButton = () => (
    <Button fluid color="black">
      <h4>  
        CURRENT SELECTED STARTERS
        <br />
        <small>(most voted 3 frontcourt players and 2 guards from each conference)</small>
      </h4>
      {modalTriggerButtonIcons()}
    </Button>
  );

  return (
    <Modal
      size="fullscreen"
      trigger={modalTriggerButton()}
      basic
      closeIcon
    >
      <Modal.Content>
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
                    {renderEastFrontcourtPlayers().map((player, index) =>
                      <SelectedPlayerListItem
                        player={player}
                        key={index}
                      />  
                    )}
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <List divided size="small">
                    {renderEastGuards().map((player, index) =>
                      <SelectedPlayerListItem
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
                    {renderWestFrontcourtPlayers().map((player, index) =>
                      <SelectedPlayerListItem
                        player={player}
                        key={index}
                      />  
                    )}
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <List divided size="small">
                    {renderWestGuards().map((player, index) =>
                      <SelectedPlayerListItem
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
      </Modal.Content>
    </Modal>
  );
};

export default SelectedPlayersListModal;
