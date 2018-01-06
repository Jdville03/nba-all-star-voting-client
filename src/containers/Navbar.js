import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default class MenuExampleEvenlyDivided extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;
    const { location } = this.props;

    return (
      <Menu fluid widths={3}>
        <Menu.Item
          name="home"
          active={activeItem === "home" || location.pathname === "/"}
          onClick={this.handleItemClick}
          as={Link} to="/"
        />  
        <Menu.Item
          name="allPlayers"
          active={activeItem === "allPlayers" || location.pathname === "/players"}
          onClick={this.handleItemClick}
          as={Link} to="/players"
        />
        <Menu.Item
          name="playersByTeam"
          active={activeItem === "playersByTeam" || location.pathname === "/teams"}
          onClick={this.handleItemClick}
          as={Link} to="/teams"
        />
      </Menu>
    )
  }
}