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
      team_id,
      position,
      image_url
    } = this.props.playerFormData;

    return (
      <div>
        <h3>Add a Player to the Ballot</h3>
        <form onSubmit={this.handleOnSubmit}>
          <div>
            {/* <label htmlFor="last_name">Last Name: </label> */}
            <input type="text" placeholder="Last Name" name="last_name" value={last_name} onChange={this.handleOnChange} />
          </div>
          <div>
            {/* <label htmlFor="first_name">First Name: </label> */}
            <input type="text" placeholder="First Name" name="first_name" value={first_name} onChange={this.handleOnChange} />
          </div>
          <div>
            {/* <label htmlFor="jersey_number">Jersey Number: </label>
            <input type="number" name="jersey_number" value={jersey_number} onChange={this.handleOnChange} /> */}
            {/* <label htmlFor="team_id">Team: </label> */}
            <select name="team_id" value={team_id} onChange={this.handleOnChange}>
              <option value="" disabled>Select Team</option>
              <option value="1">Atlanta Hawks</option>
              <option value="2">Boston Celtics</option>
              <option value="3">Brooklyn Nets</option>
              <option value="10">Golden State Warriors</option>
              <option value="11">Houston Rockets</option>
              <option value="25">Portland Trail Blazers</option>
            </select>
          </div>
          <div>
            {/* <label htmlFor="position">Position: </label> */}
            <input type="text" placeholder="Position" name="position" value={position} onChange={this.handleOnChange} />
          </div>
          <div>
            {/* <label htmlFor="image_url">Image URL: </label> */}
            <input type="text" placeholder="Image URL" name="image_url" value={image_url} onChange={this.handleOnChange} />
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