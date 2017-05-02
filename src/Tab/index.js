import React, { Component } from 'react';
import classNames from 'classnames';

require('./index.css');

export function wrapperComponent(cls) {
  return ({ children, className, ...others }) => (
    <div className={classNames(cls, className)} {...others}>
      {children}
    </div>
  );
}

export const TabBar = wrapperComponent('tabbar');
export const TabBarIcon = wrapperComponent('tabbar__icon');
export const Tab = wrapperComponent('tab');
export const TabPanel = wrapperComponent('tab__panel');

export class TabBarItem extends Component {
  static defaultProps = {
    active: false,
    icon: 'help_outline'
  };

  render() {
    const { children, className, active, icon, ...others } = this.props;

    const cls = classNames({
      'tabbar__item': true,
      'tabbar__item_on': active
    }, className);

    return (
      <div className={cls} {...others}>
        {icon && <TabBarIcon className="material-icons">{icon}</TabBarIcon> || children}
      </div>
    );
  }
}
