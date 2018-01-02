import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlayers, upVotePlayer, removePlayer } from '../actions/playerActions';
import { fetchTeams } from '../actions/teamActions';
import Players from '../components/Players';
import SelectedPlayersList from '../components/SelectedPlayersList'
import './Players.css';

import { Container, Divider } from 'semantic-ui-react';

class PlayersDashboard extends Component {
  
  componentDidMount() {
    this.props.fetchPlayers();
    this.props.fetchTeams();
  }

  handleUpVotePlayer = (playerId, playerVotes) => {
    this.props.upVotePlayer(playerId, playerVotes);
  }

  handleRemovePlayer = (playerId) => {
    this.props.removePlayer(playerId);
  }

  render() {
    return (
      <Container>
        <SelectedPlayersList players={this.props.players} />
        <Divider />
        <Players
          players={this.props.players}
          teams={this.props.teams}
          upVotePlayer={this.handleUpVotePlayer}
          removePlayer={this.handleRemovePlayer}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    players: state.players,
    teams: state.teams
  };
};

export default connect(mapStateToProps, { fetchPlayers, fetchTeams, upVotePlayer, removePlayer })(PlayersDashboard);
