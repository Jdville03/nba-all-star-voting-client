import React, { Component } from 'react';
import Players from '../components/Players';
import { Dropdown, Form, Grid, Header, Image, Segment } from 'semantic-ui-react';

class PlayersFilter extends Component {
    
  constructor(props) {
    super(props);

    this.state = {
      position: "All",
      conference: "All"
    };
  }

  handleChange = (event, { value, name }) => this.setState({ [name]: value });

  render() {
    const { position, conference } = this.state;
    const { match, players, teams, upVotePlayer, removePlayer, selectedPlayers } = this.props;

    const renderPositionsOptions = [
      { key: 1, text: "All Positions", value: "All" },
      { key: 2, text: "Frontcourt", value: "Frontcourt" },
      { key: 3, text: "Guard", value: "Guard" }
    ];

    const renderConferencesOptions = [
      { key: 1, text: "All Conferences", value: "All" },
      { key: 2, text: "Eastern Conference", value: "Eastern" },
      { key: 3, text: "Western Conference", value: "Western" }
    ];

    const initialFilteredPlayers = match.params.teamId ? players.filter(player => player.team_id === parseInt(match.params.teamId, 10)) : players; 

    const filteredPlayers = () => {
      const playersFilteredByPosition = position === "All" ? initialFilteredPlayers : initialFilteredPlayers.filter(player => player.position === position);

      return conference === "All" ? playersFilteredByPosition : playersFilteredByPosition.filter(player => player.team.conference === conference);
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
            <Grid.Column width={6} textAlign="center">
              <Header as="h4">
                <Image src={team.image_url} /> <span>{team.city} {team.name}</span>
              </Header>
            </Grid.Column>  
          );
        }
      }
    };

    const conferenceFilter = () => {
      if (!match.params.teamId) {
        return (
          <Dropdown
            onChange={this.handleChange}
            options={renderConferencesOptions}
            placeholder="Select Conference"
            name="conference"
            selection
            search
            value={conference}
            disabled={disabledProp}
          />
        );
      }
    };
    
    return (
      <div>
        <Segment>
          <Grid columns="equal">
            <Grid.Column>
              <Form>
                <Form.Field inline>
                  <label>FILTER PLAYERS:</label>  
                  <Dropdown
                    onChange={this.handleChange}
                    options={renderPositionsOptions}
                    placeholder="Select Position"
                    name="position"
                    selection
                    search
                    value={position}
                    disabled={disabledProp}
                  />{" "}
                  {conferenceFilter()}
                </Form.Field>
              </Form>
            </Grid.Column>
            {headerText()}
          </Grid>
        </Segment>
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
