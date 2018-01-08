import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Navbar = ({ location }) => (
  
  <Menu fluid widths={3}>
    <Menu.Item header>VIEW / ADD PLAYERS:</Menu.Item>
    <Menu.Item
      name="all"
      active={location.pathname === "/players"}
      content="All"
      as={Link} to="/players"
    />
    <Menu.Item
      name="byTeam"
      active={location.pathname.includes("/teams")}
      content="By Team"
      as={Link} to="/teams"
    />
  </Menu>
);

export default Navbar;