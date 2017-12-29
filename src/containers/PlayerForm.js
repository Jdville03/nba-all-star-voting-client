import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlayer } from '../actions/playerActions';
import { fetchTeams } from '../actions/teamActions';

import { Button, Card, Form, Header, Icon, Modal } from 'semantic-ui-react';

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

  handleOnSelectChange = (event, { value, name }) => this.setState({
    [name]: value
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

    const animatedButton = () =>
      <Button fluid animated="fade">
        <Button.Content hidden>Add Player</Button.Content>
        <Button.Content visible>
          <Icon name="plus" size="big" />  
        </Button.Content>
      </Button>;

    return (
      <Card>
        <Card.Content>
          <Modal size="tiny" trigger={animatedButton()} closeIcon>
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
                <Form.Input
                  placeholder="Position"
                  name="position"
                  value={position}
                  onChange={this.handleOnChange}
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
        </Card.Content>
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