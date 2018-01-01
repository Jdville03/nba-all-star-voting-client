import React, { Component } from "react";
import { connect } from "react-redux";
import { updatePlayer } from "../actions/playerActions";

import { Button, Form, Header, Icon, Modal } from "semantic-ui-react";

class EditPlayerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player: props.player,
      modalOpen: false
    };
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
    this.props.updatePlayer(this.state.player);
    this.setState({
      modalOpen: false
    })
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
      player: this.props.player
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

    const editButton = () => (
      <Button icon onClick={this.handleOpen}>
        <Icon name="edit" />
      </Button>
    );

    return (
      <Modal
        size="tiny"
        trigger={editButton()}
        closeIcon
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Header content="Edit Player" />
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
            <Form.Button>Update Player</Form.Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default connect(null, { updatePlayer })(
  EditPlayerForm
);
