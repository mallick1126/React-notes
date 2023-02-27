import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }

        /*this.clickHandler = this.clickHandler.bind(this)*/ // this is the third approach to bind an event
    }

    // This way is used in declaring the function in all the other three approaches.
    /*clickHandler() {
        this.setState({
            message: 'Goodbye!'
        })
    }*/

    clickHandler = () => {
        this.setState({
            message: 'Goodbye!'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/*1. First method is to bind the this keyword in the render method itself. */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/*2. Second method is to use a callback function to call the clickHandler function in the render method. */}
                {/* <button onClick={()=>{this.clickHandler()}}>Click</button> */}
                {/*3. Third method is to bind the this keyword in the constructor function itself. */}
                {/* <button onClick={this.clickHandler}>Click</button> */}
                {/*4. Fourth method is to use a arrow function syntax as a function define in the class component. */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBinding