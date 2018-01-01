import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlayers, upVotePlayer } from '../actions/playerActions';
import { fetchTeams } from '../actions/teamActions';
import PlayerCard from '../components/PlayerCard';
import NewPlayerForm from './NewPlayerForm';
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

  render() {
    const sortedPlayers = this.props.players.sort((a, b) => (
      a.last_name.localeCompare(b.last_name) || a.first_name.localeCompare(b.first_name) || a.id - b.id
    ));

    return (
      <Container>
        <Card.Group itemsPerRow={5} doubling>  
          {sortedPlayers.map(player =>
            <PlayerCard player={player} teams={this.props.teams} key={player.id} upVotePlayer={this.handleUpVotePlayer} />
          )}
          <Card>
            <NewPlayerForm teams={this.props.teams} />
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

export default connect(mapStateToProps, { fetchPlayers, fetchTeams, upVotePlayer })(Players);
