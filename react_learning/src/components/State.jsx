import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';



export default class State extends Component {
    //constractor
    constructor(props) {
      super(props)
    
      this.state = {
          count: 0,
      }
    }
    
    //state handler
    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

   handleDecrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    
  render() {
    //disturcturing
    const {count} = this.state
    return (
        
        <div>
            <h5>State exmaple</h5>
            <h1>Count : {count} </h1>
            
            <Button className="me-2" style={{ width: '80px' }} onClick={this.handleIncrement}>+</Button>
            <Button style={{ width: '80px' }} onClick={this.handleDecrement} disabled={count===0 ? true : false}>-</Button>

        </div>
    );
  }
}
