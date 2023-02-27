import React, { Component } from 'react'
import LifecycleB from './LifecycleB';
class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'abc'
        }
        console.log('LifecycleA Constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecyleA componentDidMount')
    }
    render() {
        console.log('LifeCycleA render')
        return (
            <div>
                <div>LifecycleA</div>
                <LifecycleB />
            </div>

        )
    }
}

export default LifecycleA