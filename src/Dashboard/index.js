import React, { Component } from 'react';
import { TabPanel } from '../Tab';
import Input from './Input';

export default class Dashboard extends Component {

  render() {
    return (
      <TabPanel>
        <div>
          Email
          <span className="form-required">*</span>
          <Input
            className="input"
            type="text"
            value="email@gmail.com"
            validators={['required', 'email']}
          />
        </div>
        <div>
          Password
          <span className="form-required">*</span>
          <Input
            className="input"
            type="password"
            value=""
            validators={['required']}
          />
        </div>
      </TabPanel>
    );
  }
}
