import React, { Component } from 'react';
import Players from '../components/Players';
import { Dropdown, Form, Header, Image, Segment } from 'semantic-ui-react';

class PlayersFilter extends Component {
  
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    const { match, players, teams, upVotePlayer, removePlayer, selectedPlayers } = this.props;

    const renderPositionsOptions = [
      { key: 1, text: "All Positions", value: "All" },
      { key: 2, text: "Frontcourt", value: "Frontcourt" },
      { key: 3, text: "Guard", value: "Guard" }
    ];

    const initialFilteredPlayers = match.params.teamId ? players.filter(player => player.team_id === parseInt(match.params.teamId, 10)) : players; 
    
    const filteredPlayers = () => {
      switch (value) {
        case "All":
          return initialFilteredPlayers;
        case "Frontcourt":
          return initialFilteredPlayers.filter(player => player.position === "Frontcourt");
        case "Guard":
          return initialFilteredPlayers.filter(player => player.position === "Guard");
        default:
          return initialFilteredPlayers;  
      }
    };

    const selectedPlayersIds = () => {
      let selectedPlayersIds = [];
      return selectedPlayersIds
        .concat(selectedPlayers.eastFrontcourtPlayers.map(player => player.id))
        .concat(selectedPlayers.eastGuards.map(player => player.id))
        .concat(selectedPlayers.westFrontcourtPlayers.map(player => player.id))
        .concat(selectedPlayers.westGuards.map(player => player.id));
    };

    const disabledProp = initialFilteredPlayers.length ? false : true

    const headerText = () => {
      if (match.params.teamId) {
        const team = teams.find(team => team.id === parseInt(match.params.teamId, 10));
        if (team) {
          return (
            <Segment textAlign="center">
              <Header as="h4">
                <Image src={team.image_url} /> <span>{team.city} {team.name}</span>
              </Header>
            </Segment>
          );
        }
      }
    };
    
    return (
      <div>
        <Segment.Group horizontal>
          <Segment>
            <Form>
              <Form.Field inline>
                <label>FILTER PLAYERS:</label>  
                <Dropdown
                  onChange={this.handleChange}
                  options={renderPositionsOptions}
                  placeholder="Select Position"
                  selection
                  search
                  value={value}
                  disabled={disabledProp}
                />
              </Form.Field>
            </Form>
          </Segment>
          {headerText()}
        </Segment.Group>
        <Players 
          teams={teams}
          players={players}
          upVotePlayer={upVotePlayer}
          removePlayer={removePlayer}
          filteredPlayers={filteredPlayers()}
          selectedPlayersIds={selectedPlayersIds()}
          match={match}
        />
      </div>
    );
  }
}

export default PlayersFilter;
