import React, { Component } from 'react';
import icon from '../../assets/img/icon-128.png';

class GreetingComponent extends Component {
  state = {
    name: 'dev',
  };

  render() {
    const leagueName = this.props.leagueName;
    return (
      <div>
        <h2>{leagueName}</h2>
        <p>Hello, {this.state.name}!</p>
        <img src={icon} alt="extension icon" />
      </div>
    );
  }
}

export default GreetingComponent;
