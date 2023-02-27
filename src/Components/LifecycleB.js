import React, { Component } from 'react'
class LifecycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'abc'
        }
        console.log('LifecycleB Constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecyleB componentDidMount')
    }
    render() {
        console.log('LifeCycleB render')
        return (
            <div>LifecycleB</div>
        )
    }
}

export default LifecycleB