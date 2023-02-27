import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCounter() {
        // this.setState({
        //     count: this.state.count + 1
        // }, () => { console.log('Callback Value', this.state.count) })
        // console.log(this.state.count)

        //when we want to update the value based on the previous state value, then we got to use a callback funtion as an argument to the setState() function instead of sending the regular object.

        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    decrementCounter() {
        // this.setState({
        //     count: this.state.count - 1
        // }, () => { console.log('Callback Value', this.state.count) })
        // console.log(this.state.count)

        this.setState((prevState) => ({
            count: prevState.count - 1
        }))
    }

    incrementFive() {
        this.incrementCounter();
        this.incrementCounter();
        this.incrementCounter();
        this.incrementCounter();
        this.incrementCounter();
    }
    decrementFive() {
        this.decrementCounter();
        this.decrementCounter();
        this.decrementCounter();
        this.decrementCounter();
        this.decrementCounter();
    }

    render() {
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={() => this.incrementFive()}>Increment </button>
                <button onClick={() => this.decrementFive()}>Decrement </button>
            </div>
        )
    }
}

export default Counter