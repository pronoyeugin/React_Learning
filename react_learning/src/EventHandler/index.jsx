import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';


class EventHandlerClass extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         changedValue: ''
      }
    }

    handleOnChange = (e) => {
        this.setState({
            changedValue : e.target.value
        },() => {
            console.log(this.state.changedValue)
        })
    }

    render() {
        return (
        <>
        <h5>EventHandler Example</h5>
        <div className="d-flex text-center align-items-center gap-3">
            <input className="form-control w-50" type="text" onChange={this.handleOnChange} />
            <p className="mb-0">{this.state.changedValue}</p>
           <Button>Search</Button>
        </div>

        </>
        )
    }
}

export default EventHandlerClass;