import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PlayersFilter from './PlayersFilter';
import Teams from '../components/Teams';
import { Dropdown, Form, Segment } from 'semantic-ui-react';

class TeamsFilter extends Component {
  
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    const { match, players, teams, upVotePlayer, removePlayer, selectedPlayers } = this.props;

    const renderConferencesOptions = [
      { key: 1, text: "All Conferences", value: "All" },
      { key: 2, text: "Eastern Conference", value: "Eastern" },
      { key: 3, text: "Western Conference", value: "Western" }
    ];

    const filteredTeams = () => {
      switch (value) {
        case "All":
          return teams;
        case "Eastern":
          return teams.filter(team => team.conference === "Eastern");
        case "Western":
          return teams.filter(team => team.conference === "Western");
        default:
          return teams;
      }
    };
    
    return (
      <div>
        <Route exact path={match.url} render={() => (
          <div>
            <Segment>
              <Form>
                <Form.Field inline>
                  <label>FILTER TEAMS:</label>  
                  <Dropdown
                    onChange={this.handleChange}
                    options={renderConferencesOptions}
                    placeholder="Select Conference"
                    selection
                    search
                    value={value}
                  />
                </Form.Field>
              </Form>
            </Segment>
            <Teams
              players={players}
              filteredTeams={filteredTeams()}
            />
          </div>
        )} />
        <Route path={`${match.url}/:teamId`} render={(props) => (
          <PlayersFilter
            players={players}
            teams={teams}
            upVotePlayer={upVotePlayer}
            removePlayer={removePlayer}
            selectedPlayers={selectedPlayers}
            {...props}
          />
        )} />
      </div>
    );
  }
}

export default TeamsFilter;
