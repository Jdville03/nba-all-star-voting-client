import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Players from '../components/Players';
import Teams from '../components/Teams';
import { Dropdown } from 'semantic-ui-react';

class TeamsFilter extends Component {
  
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    const { match, players, teams, upVotePlayer, removePlayer, selectedPlayers } = this.props;

    const renderConferenceOptions = [
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
            Filter Teams:
            <Dropdown
              onChange={this.handleChange}
              options={renderConferenceOptions}
              placeholder="Select Conference"
              selection
              search
              value={value}
            />
            <Teams
              players={players}
              filteredTeams={filteredTeams()}
            />
          </div>
        )} />
        <Route path={`${match.url}/:teamId`} render={(props) => (
          <Players
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
