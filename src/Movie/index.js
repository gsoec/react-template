import React, { Component } from 'react';
import { TabPanel } from '../Tab';

require('./index.css');

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://www.youtube.com/embed/nQUibyxOx2c',
      title: '',
      body: '',
    };
  }

  componentDidMount() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(movie => this.setState(movie));
  }

  render() {
    const { title, body, url } = this.state;

    return (
      <TabPanel>
        <h2>{title}</h2>
        <div>{body}</div>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src={url}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </TabPanel>
    );
  }
}
