import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchPlayers } from '../actions/playerActions';
import PlayerCard from '../components/PlayerCard';
import PlayerForm from './PlayerForm';
import './Players.css';

import { Item } from 'semantic-ui-react';

class Players extends Component {
  
  componentDidMount() {
    this.props.fetchPlayers();
  }

  render() {
    const sortedPlayers = this.props.players.sort((a, b) => (
      a.last_name.localeCompare(b.last_name) || a.first_name.localeCompare(b.first_name) || a.id - b.id
    ));

    return (
      <div>
        <h1>Players Component</h1>
        <Item.Group>  
          {sortedPlayers.map(player =>
            <PlayerCard player={player} key={player.id} />
          )}
        </Item.Group>
        <PlayerForm />
      </div>
      // <div className="PlayersContainer">
      //   <h1>Players Component</h1>
      //   {this.props.players.map(player => (
      //     <PlayerCard player={player} key={player.id} />
      //   ))}
      //   <div>
      //     <PlayerForm />
      //   </div>  
      // </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    players: state.players
  };
};

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(
//     {
//       fetchPlayers: fetchPlayers
//     },
//     dispatch
//   );
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Players);

export default connect(mapStateToProps, { fetchPlayers })(Players);
