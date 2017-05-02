import React, { Component } from 'react';
import { TabPanel } from '../Tab';

export default class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    return fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(photos => this.setState({ photos }));
  }

  _onPhotoClicked(photo, index) {
    alert(`filename: ${photo.url}\nposition on the list of 10: ${index + 1}`);
  }

  render() {
    const { photos } = this.state;

    return (
      <TabPanel>
        {photos.slice(0, 10).map((photo, index) =>
          <div key={photo.id}>
            <img
              width="100%"
              src={photo.url}
              onClick={() => this._onPhotoClicked(photo, index)}
            />
            <div style={{margin: '15px 0 30px 0'}}>{ photo.title }</div>
          </div>
        )}
      </TabPanel>
    );
  }
}
