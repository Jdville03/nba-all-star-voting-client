import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlayers, upVotePlayer, removePlayer } from '../actions/playerActions';
import { fetchTeams } from '../actions/teamActions';
import PlayerCard from '../components/PlayerCard';
import PlayerFormModal from './PlayerFormModal';
import './Players.css';

import { Card, Container } from 'semantic-ui-react';

class Players extends Component {
  
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
    const sortedPlayers = this.props.players.sort((a, b) => (
      a.last_name.localeCompare(b.last_name) || a.first_name.localeCompare(b.first_name) || a.id - b.id
    ));

    return (
      <Container>
        <Card.Group itemsPerRow={4} doubling stackable>  
          {sortedPlayers.map(player =>
            <PlayerCard player={player} teams={this.props.teams} key={player.id} upVotePlayer={this.handleUpVotePlayer} removePlayer={this.handleRemovePlayer} />
          )}
          <Card>
            <PlayerFormModal teams={this.props.teams} />
          </Card>
        </Card.Group>
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

export default connect(mapStateToProps, { fetchPlayers, fetchTeams, upVotePlayer, removePlayer })(Players);
