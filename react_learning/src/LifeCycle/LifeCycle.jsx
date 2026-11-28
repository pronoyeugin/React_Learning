import React, { Component } from 'react'


    // Mounting -> constructor -> render -> componentDidmount
    //Updating -> state/props  -> render -> 

 class LifeCycle extends Component {

    constructor(props) {
      super(props)

      console.log("constrator")

      this.state = {
        count: 0
      };

    }

    componentDidMount() {
        console.log("componentdidMount");
    };

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return true;
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");

    }

    handleChange = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {

        {
            console.log("render")
        }

        return (
        <>
            <h5>Life cycle of a class component</h5>
            <h2>Counter: {this.state.count}</h2>
            <button onClick={this.handleChange}>+</button>

            
        </>
        )
    }
}

export default  LifeCycle;
