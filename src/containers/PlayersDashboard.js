import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlayers, upVotePlayer, removePlayer } from '../actions/playerActions';
import { fetchTeams } from '../actions/teamActions';
import Players from '../components/Players';
import SelectedPlayersListModal from '../components/SelectedPlayersListModal';
import './Players.css';

import { Container, Divider } from 'semantic-ui-react';

class PlayersDashboard extends Component {
  
  componentDidMount() {
    this.props.fetchPlayers();
    this.props.fetchTeams();
  }

  selectedPlayers = () => {
    const selectedPlayers = {
      eastFrontcourtPlayers: [],
      eastGuards: [],
      westFrontcourtPlayers: [],
      westGuards: []
    }
    const eastPlayers = this.props.players.filter(player => player.team.conference === "Eastern");
    selectedPlayers.eastFrontcourtPlayers = eastPlayers
      .filter(player => player.position === "Frontcourt" && player.votes > 0)
      .sort((a, b) => b.votes - a.votes)
      .slice(0, 3);
    selectedPlayers.eastGuards = eastPlayers
      .filter(player => player.position === "Guard" && player.votes > 0)
      .sort((a, b) => b.votes - a.votes)
      .slice(0, 2);
    
    const westPlayers = this.props.players.filter(player => player.team.conference === "Western");
    selectedPlayers.westFrontcourtPlayers = westPlayers
      .filter(player => player.position === "Frontcourt" && player.votes > 0)
      .sort((a, b) => b.votes - a.votes)
      .slice(0, 3);
    selectedPlayers.westGuards = westPlayers
      .filter(player => player.position === "Guard" && player.votes > 0)
      .sort((a, b) => b.votes - a.votes)
      .slice(0, 2);
    
    return selectedPlayers;
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
        <SelectedPlayersListModal selectedPlayers={this.selectedPlayers()} />
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
  };
};

export default connect(mapStateToProps, { fetchPlayers, fetchTeams, upVotePlayer, removePlayer })(PlayersDashboard);
