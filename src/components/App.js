import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PlayersDashboard from '../containers/PlayersDashboard';
import { Header, Image } from 'semantic-ui-react';

class App extends Component {

  render() {
    return (
      <div>
        <Header as="h1" textAlign="center" block>
          <Image src="https://espntheundefeated.files.wordpress.com/2017/05/nba-logo.png" size="medium" />
          NBA All Star Ballot
        </Header>
        <Route path="/" component={PlayersDashboard} />
      </div>
    );
  }
}

export default App;
