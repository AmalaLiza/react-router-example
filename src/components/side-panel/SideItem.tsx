import * as React from 'react';

export default class SideItem extends React.Component<any, any> {
  render() {
    return <li>
        <span>{this.props.userName}</span>
    </li>
  }
}