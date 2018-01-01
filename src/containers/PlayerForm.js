import React, { Component } from "react";
import { connect } from "react-redux";
import { addPlayer, updatePlayer } from "../actions/playerActions";

import { Button, Form, Header, Icon, Modal } from "semantic-ui-react";

class PlayerForm extends Component {
  constructor(props) {
    super(props);

    if (props.player) {
      this.state = {
        player: props.player,
        modalOpen: false
      };
    } else {
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
    if (this.props.player) {
      this.props.updatePlayer(this.state.player);
      this.setState({
        modalOpen: false
      });
    } else {
      this.props.addPlayer(this.state.player);
      this.handleClose();
    }
  };

  handleOpen = () => {
    this.setState({
      ...this.state,
      modalOpen: true
    });
  };

  handleClose = () => {
    if (this.props.player) {
      this.setState({
        modalOpen: false,
        player: this.props.player
      });
    } else {
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
    }
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

    const modalTriggerButton = () => {
      if (this.props.player) {
        return (
          <Button icon onClick={this.handleOpen}>
            <Icon name="edit" />
          </Button>
        );
      } else {
        return (
          <div id="addPlayerButton">
            <Button fluid animated="fade" onClick={this.handleOpen}>
              <Button.Content hidden>Add Player</Button.Content>
              <Button.Content visible>
                <Icon name="add user" size="big" />
              </Button.Content>
            </Button>
          </div>
        );
      }
    };

    const headerText = this.props.player ? "Edit Player" : "Add a Player to the Ballot";

    const submitText = this.props.player ? "Update Player" : "Add Player";

    return (
      <Modal
        size="tiny"
        trigger={modalTriggerButton()}
        closeIcon
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Header content={headerText} />
        <Modal.Content>
          <Form size="small" onSubmit={this.handleOnSubmit}>
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
            <Form.Select
              options={renderTeamsOptions}
              label="Team"
              placeholder="Select Team"
              name="team_id"
              selection
              value={team_id}
              onChange={this.handleOnSelectChange}
            />
            <Form.Select
              options={renderPositionsOptions}
              label="Position"
              placeholder="Select Position"
              name="position"
              selection
              value={position}
              onChange={this.handleOnSelectChange}
            />
            <Form.Input
              label="Image URL"
              placeholder="NBA Logo Default"
              name="image_url"
              value={image_url}
              onChange={this.handleOnChange}
            />
            <Form.Button>{submitText}</Form.Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default connect(null, { addPlayer, updatePlayer })(PlayerForm);
