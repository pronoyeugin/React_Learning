import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class HooksUseState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <>
        <h5>HooksUseState with Class Components</h5>
        <div>
          <h1>Count :{count}</h1>
          <Button onClick={this.handleIncrement}>+</Button>
        </div>
      </>
    );
  }
}

export default HooksUseState;
