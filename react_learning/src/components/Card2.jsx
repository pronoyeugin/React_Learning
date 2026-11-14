import React, { Component } from 'react';

class Card2 extends Component {
  render() {
    return (
      //for props recieve use "this.props"
      <h3>{this.props.name}</h3>
    );
  }
}

export default Card2;
