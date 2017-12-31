import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlayer } from '../actions/playerActions';
import { fetchTeams } from '../actions/teamActions';

import { Button, Card, Form, Header, Icon, Modal } from 'semantic-ui-react';

class PlayerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player: {
        last_name: "",
        first_name: "",
        team_id: "",
        position: "",
        image_url: ""
      },
      modalOpen: false
    };
  }

  componentDidMount() {
    this.props.fetchTeams();
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      player: { ...this.state.player, [name]: value }
    });
  };

  handleOnSelectChange = (event, { value, name }) =>
    this.setState({
      ...this.state,
      player: { ...this.state.player, [name]: value }
    });

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addPlayer(this.state.player);
    this.handleClose();
  };

  handleOpen = () => {
    this.setState({
      ...this.state,
      modalOpen: true
    });
  };

  handleClose = () => {
    this.setState({
      modalOpen: false,
      player: {
        last_name: "",
        first_name: "",
        team_id: "",
        position: "",
        image_url: ""
      }
    });
  };

  render() {
    const {
      last_name,
      first_name,
      team_id,
      position,
      image_url
    } = this.state.player;

    const renderTeamsOptions = this.props.teams.map(team => {
      return Object.assign(
        {},
        { key: team.id, text: `${team.city} ${team.name}`, value: team.id }
      );
    });

    const renderPositionsOptions = [
      { key: 1, text: "Frontcourt", value: "Frontcourt" },
      { key: 2, text: "Guard", value: "Guard" }
    ];

    const animatedButton = () => (
      <div id="addPlayerButton">
        <Button fluid animated="fade" onClick={this.handleOpen}>
          <Button.Content hidden>Add Player</Button.Content>
          <Button.Content visible>
            <Icon name="add user" size="big" />
          </Button.Content>
        </Button>
      </div>
    );

    return (
      <Card>
        <Modal
          size="tiny"
          trigger={animatedButton()}
          closeIcon
          open={this.state.modalOpen}
          onClose={this.handleClose}
        >
          <Header content="Add a Player to the Ballot" />
          <Modal.Content>
            <Form size="small" onSubmit={this.handleOnSubmit}>
              <Form.Input
                placeholder="Last name"
                name="last_name"
                value={last_name}
                onChange={this.handleOnChange}
              />
              <Form.Input
                placeholder="First name"
                name="first_name"
                value={first_name}
                onChange={this.handleOnChange}
              />
              <Form.Select
                options={renderTeamsOptions}
                placeholder="Select Team"
                name="team_id"
                selection
                value={team_id}
                onChange={this.handleOnSelectChange}
              />
              <Form.Select
                options={renderPositionsOptions}
                placeholder="Select Position"
                name="position"
                selection
                value={position}
                onChange={this.handleOnSelectChange}
              />
              <Form.Input
                placeholder="Image URL"
                name="image_url"
                value={image_url}
                onChange={this.handleOnChange}
              />
              <Form.Button>Add Player</Form.Button>
            </Form>
          </Modal.Content>
        </Modal>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    teams: state.teams
  }
}

export default connect(mapStateToProps, { addPlayer, fetchTeams })(PlayerForm);