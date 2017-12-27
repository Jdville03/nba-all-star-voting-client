import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlayer } from '../actions/playerActions';
import { fetchTeams } from '../actions/teamActions';
import { Form } from 'semantic-ui-react';

class PlayerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      last_name: "",
      first_name: "",
      team_id: "",
      position: "",
      image_url: ""
    };
  }

  componentDidMount() {
    this.props.fetchTeams();
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleOnSelectChange = (e, { value }) => this.setState({
    team_id: value
  });

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addPlayer(this.state);
    this.setState({
      last_name: "",
      first_name: "",
      team_id: "",
      position: "",
      image_url: ""
    });
  };

  render() {
    const { last_name, first_name, team_id, position, image_url } = this.state;

    const renderTeamsOptions = this.props.teams.map(team => {
      return Object.assign({}, { key: team.id, text: `${team.city} ${team.name}`, value: team.id });
    });

    return (
      <div>
        <h3>Add a Player to the Ballot</h3>
        <Form onSubmit={this.handleOnSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="Last name"
              placeholder="Last name"
              name="last_name"
              value={last_name}
              onChange={this.handleOnChange}
            />
            <Form.Input
              label="First name"
              placeholder="First name"
              name="first_name"
              value={first_name}
              onChange={this.handleOnChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Select
              label="Team"
              options={renderTeamsOptions}
              placeholder="Select Team"
              name="team_id"
              selection
              value={team_id}
              onChange={this.handleOnSelectChange}
            />
            <Form.Input
              label="Position"
              placeholder="Position"
              name="position"
              value={position}
              onChange={this.handleOnChange}
            />
            <Form.Input
              label="Image URL"
              placeholder="Image URL"
              name="image_url"
              value={image_url}
              onChange={this.handleOnChange}
            />
          </Form.Group>
          <Form.Button>Add Player</Form.Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    teams: state.teams
  }
}

export default connect(mapStateToProps, { addPlayer, fetchTeams })(PlayerForm);