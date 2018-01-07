import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlayer, updatePlayer } from '../actions/playerActions';
import { Button, Form, Header, Icon, Message, Modal } from 'semantic-ui-react';

class PlayerFormModal extends Component {
  
  constructor(props) {
    super(props);

    if (props.player) {
      this.state = {
        player: props.player,
        modalOpen: false,
        formError: false,
        formWarning: false,
        duplicatePlayer: {}
      };
    } else {
      this.state = {
        player: {
          last_name: "",
          first_name: "",
          team_id: parseInt(this.props.match.params.teamId, 10) || "",
          position: "",
          image_url: ""
        },
        modalOpen: false,
        formError: false,
        formWarning: false,
        duplicatePlayer: {}
      };
    }
  }

  validatePlayer = () => {
    let playerOnBallot;
    if (this.props.player) {
      playerOnBallot = this.props.players.find(player => player.last_name.toUpperCase() === this.state.player.last_name.toUpperCase() && player.first_name.toUpperCase() === this.state.player.first_name.toUpperCase() && player.id !== this.props.player.id);
    } else {
      playerOnBallot = this.props.players.find(player => player.last_name.toUpperCase() === this.state.player.last_name.toUpperCase() && player.first_name.toUpperCase() === this.state.player.first_name.toUpperCase());
    }

    if (playerOnBallot) {
      this.setState({
        formWarning: true,
        duplicatePlayer: playerOnBallot
      });
    } else {
      this.setState({
        formWarning: false,
        duplicatePlayer: {}
      });
    }
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({
      player: { ...this.state.player, [name]: value }
    });
  };

  handleOnSelectChange = (event, { value, name }) =>
    this.setState({
      player: { ...this.state.player, [name]: value }
    });

  handleOnSubmit = event => {
    event.preventDefault();
    if (!this.state.player.team_id || !this.state.player.position) {
      this.setState({
        formError: true
      });
    } else {
      if (this.props.player) {
        this.props.updatePlayer(this.state.player);
        this.setState({
          modalOpen: false,
          formWarning: false,
          duplicatePlayer: {}
        });
      } else {
        this.props.addPlayer(this.state.player);
        this.handleClose();
      }
    }  
  };

  handleOpen = () => {
    if (this.props.player) {
      this.setState({
        modalOpen: true,
        player: this.props.player
      });
    } else {
      this.setState({
        modalOpen: true
      });
    }
  };

  handleClose = () => {
    if (this.props.player) {
      this.setState({
        modalOpen: false,
        formError: false,
        formWarning: false,
        duplicatePlayer: {},
        player: this.props.player
      });
    } else {
      this.setState({
        modalOpen: false,
        formError: false,
        formWarning: false,
        duplicatePlayer: {},
        player: {
          last_name: "",
          first_name: "",
          team_id: parseInt(this.props.match.params.teamId, 10) || "",
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
          <Button icon basic compact floated="right" size="mini" onClick={this.handleOpen}>
            <Icon name="edit" />
          </Button>
        );
      } else {
        return (
          <Button fluid animated="fade" onClick={this.handleOpen} size="big">
            <Button.Content hidden>Add Player</Button.Content>
            <Button.Content visible>
              <Icon name="add user" size="big" />
            </Button.Content>
          </Button>
        );
      }
    };

    const headerText = this.props.player ? "Edit Player" : "Add New Player";

    const submitText = this.props.player ? "Update Player" : "Add Player";

    const warningMessageContent = () => {
      if (this.state.formWarning) {
        const { last_name, first_name, team } = this.state.duplicatePlayer;
        return `${first_name.toUpperCase()} ${last_name.toUpperCase()} (${team.city} ${team.name}) is already on the ballot.`
      }
    }

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
          <Form error={this.state.formError} warning={this.state.formWarning} size="small" onSubmit={this.handleOnSubmit}>
            <Form.Input
              label="Last name"  
              placeholder="Last name"
              name="last_name"
              value={last_name}
              onChange={this.handleOnChange}
              onBlur={this.validatePlayer}
              required
            />
            <Form.Input
              label="First name"
              placeholder="First name"
              name="first_name"
              value={first_name}
              onChange={this.handleOnChange}
              onBlur={this.validatePlayer}
              required
            />
            <Form.Dropdown
              options={renderTeamsOptions}
              label="Team"
              placeholder="Select Team"
              name="team_id"
              search
              selection
              value={team_id}
              onChange={this.handleOnSelectChange}
              required
            />
            <Form.Dropdown
              options={renderPositionsOptions}
              label="Position"
              placeholder="Select Position"
              name="position"
              search
              selection
              value={position}
              onChange={this.handleOnSelectChange}
              required
            />
            <Form.Input
              label="Image URL"
              placeholder="Team Logo Default"
              name="image_url"
              value={image_url}
              onChange={this.handleOnChange}
            />
            <Message
              error
              header="Submission Error"
              content="You are missing a required field."
            />
            <Message
              warning
              header="Submission Warning"
              content={warningMessageContent()}
            />
            <Form.Button>{submitText}</Form.Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default connect(null, { addPlayer, updatePlayer })(PlayerFormModal);
