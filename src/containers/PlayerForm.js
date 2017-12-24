import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePlayerFormData } from '../actions/playerForm';
import { addPlayer } from '../actions/playerActions';

class PlayerForm extends Component {
  
  handleOnChange = event => {
    const { name, value } = event.target;
    const currentPlayerFormData = Object.assign({}, this.props.playerFormData, {
      [name]: value
    });
    this.props.updatePlayerFormData(currentPlayerFormData);
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addPlayer(this.props.playerFormData);
  }

  render() {
    const {
      last_name,
      first_name,
      jersey_number,
      position,
      image_url
    } = this.props.playerFormData;

    return (
      <div>
        Add a Player to the Roster
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="last_name">Last Name: </label>
            <input type="text" name="last_name" value={last_name} onChange={this.handleOnChange} />
          </div>
          <div>
            <label htmlFor="first_name">First Name: </label>
            <input type="text" name="first_name" value={first_name} onChange={this.handleOnChange} />
          </div>
          <div>
            <label htmlFor="jersey_number">Jersey Number: </label>
            <input type="number" name="jersey_number" value={jersey_number} onChange={this.handleOnChange} />
          </div>
          <div>
            <label htmlFor="position">Position: </label>
            <input type="text" name="position" value={position} onChange={this.handleOnChange} />
          </div>
          <div>
            <label htmlFor="image_url">Image URL: </label>
            <input type="text" name="image_url" value={image_url} onChange={this.handleOnChange} />
          </div>
          <button type="submit">Add Player</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    playerFormData: state.playerFormData
  }
}

export default connect(mapStateToProps, { updatePlayerFormData, addPlayer })(PlayerForm);