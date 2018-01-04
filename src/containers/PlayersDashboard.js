import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlayers, upVotePlayer, removePlayer } from '../actions/playerActions';
import { fetchTeams } from '../actions/teamActions';
import { updateSelectedPlayers } from '../actions/selectedPlayerActions';
import Players from '../components/Players';
import SelectedPlayersListModal from '../components/SelectedPlayersListModal';
import './Players.css';

import { Container, Divider } from 'semantic-ui-react';

class PlayersDashboard extends Component {
  
  componentDidMount() {
    this.props.fetchPlayers();
    this.props.fetchTeams();
  }

  // componentDidUpdate() {
  //   this.props.updateSelectedPlayers(this.props.players);
  // }

  handleUpVotePlayer = (playerId, playerVotes) => {
    this.props.upVotePlayer(playerId, playerVotes);
    this.props.updateSelectedPlayers(this.props.players);
  }

  handleRemovePlayer = (playerId) => {
    this.props.removePlayer(playerId);
  }

  render() {
    return (
      <Container>
        <SelectedPlayersListModal players={this.props.players} />
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
    teams: state.teams,
    selectedPlayers: state.selectedPlayers
  };
};

export default connect(mapStateToProps, { fetchPlayers, fetchTeams, upVotePlayer, removePlayer, updateSelectedPlayers })(PlayersDashboard);
