import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

 class EventBinding extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
      // binding on constrctor 
      this.handelOnClick = this.handelOnClick.bind(this);
    }
    //  ES6 Function 
    // handelOnClick =() =>{
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }

    //with out ES6 function
    handelOnClick(){
        this.setState({
            count: this.state.count + 1
        })
    }


    render() {
        return (
            <>

            <h5>Event Binding Example</h5>

            <div>
                <h1>{this.state.count}</h1>
                {/* This Line for ES6 */}
                {/* <Button onClick={this.handelOnClick}>+</Button>   */}

                {/* This Line for without ES6 */}
                {/* <Button onClick={this.handelOnClick.bind(this)}>+</Button> */}

                {/* Constractor binding */}
                <Button onClick={this.handelOnClick}>+</Button>
            </div>

        </>
        )
    }
}

export default EventBinding;