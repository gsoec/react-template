import React, { Component } from 'react';
import validator from 'validator';

require('./input.css');

export default class InputValidator extends Component {

  // Append more rules into this static variable if need.
  // Example:
  // Object.assign(InputValidator.rules, {
  //   phone: {
  //     test: value => validator.isNumeric(value),
  //     hint: value => <span className='form-error'>phone number must contains only numbers</span>
  //   }
  // })
  static rules = {
    required: {
      test: value => value.toString().trim(),
      hint: value => <span className='form-error'>Required</span>
    },
    email: {
      test: value => validator.isEmail(value),
      hint: value => <span className='form-error'>{value} isnt an Email.</span>
    },
  };

  static defaultProps = {
    validators: []
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.value || '',
      hint: false,
      validators: []
    };
  }

  componentDidMount() {
    this._validate(this.state.value);
  }

  _validate(value) {
    let hint;
    this.props.validators.find(validator => {
      if (validator in InputValidator.rules) {
        const rule = InputValidator.rules[validator];
        if (!rule.test(value)) {
          hint = rule.hint(value)
          return hint;
        }
      }
    });
    this.setState({ hint, value });
  }

  handleChange(e) {
    const { onChange } = this.props;
    this._validate(e.target.value);
    if (onChange) {
      onChange(e);
    }
  }

  handleBlur(e) {
    const { onBlur } = this.props;
    this._validate(e.target.value);
    if (onBlur) {
      onBlur(e);
    }
  }

  render() {
    const { rootClass, validators, onChange, onBlur, value, ...others } = this.props;

    return (
      <div className={rootClass}>
        <input
          onChange={this.handleChange.bind(this)}
          onBlur={this.handleBlur.bind(this)}
          value={this.state.value}
          {...others}
        />
        {this.state.hint}
      </div>
    );
  }
}
