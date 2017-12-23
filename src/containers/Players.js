import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { fetchPlayers } from '../actions/playerActions';
import PlayerCard from '../components/PlayerCard';
import PlayerForm from './PlayerForm';
import './Players.css';

class Players extends Component {
  
  componentDidMount() {
    this.props.fetchPlayers();
  }

  render() {
    return (
      <div className="PlayersContainer">
        <h1>Players Component</h1>
        {this.props.players.map(player => (
          <PlayerCard player={player} key={player.id} />
        ))}
        <PlayerForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    players: state.players
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchPlayers: fetchPlayers
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Players);
