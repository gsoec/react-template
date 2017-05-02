import React, { Component } from 'react';
import { TabBar, TabBarItem } from '../Tab';
import Movie from '../Movie';
import Photos from '../Photos';
import Dashboard from '../Dashboard';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { tab: 0 };
  }

  renderPanel(tab) {
    switch(tab) {
      case 1:
        return <Photos />;
      case 2:
        return <Dashboard />;
      default:
        return <Movie />;
    }
  }

  render() {
    const { tab } = this.state;

    return (
      <div>
        {this.renderPanel(tab)}
        <TabBar>
          <TabBarItem
            active={tab === 0}
            onClick={() => this.setState({ tab: 0 })}
            icon="movie"
          />
          <TabBarItem
            active={tab === 1}
            onClick={() => this.setState({ tab: 1 })}
            icon="photo"
          />
          <TabBarItem
            active={tab === 2}
            onClick={() => this.setState({ tab: 2 })}
            icon="dashboard"
          />
        </TabBar>
      </div>
    );
  }
}
