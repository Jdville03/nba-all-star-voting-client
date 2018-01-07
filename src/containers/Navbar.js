import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class Navbar extends Component {
  
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;
    const { location } = this.props;

    return (
      <Menu fluid widths={3}>
        <Menu.Item header>VIEW/ADD PLAYERS:</Menu.Item>
        <Menu.Item
          name="all"
          active={activeItem === "all" || location.pathname === "/players"}
          content="All"
          onClick={this.handleItemClick}
          as={Link} to="/players"
        />
        <Menu.Item
          name="byTeam"
          active={activeItem === "byTeam" || location.pathname.includes("/teams")}
          content="By Team"
          onClick={this.handleItemClick}
          as={Link} to="/teams"
        />
      </Menu>
    )
  }
}

export default Navbar;