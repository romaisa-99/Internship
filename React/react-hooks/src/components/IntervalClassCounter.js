
import React, { Component } from 'react'

class IntervalClassCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    // Creates a timer that runs every second
    componentDidMount() {
        this.interval = setInterval(this.tick, 1000)
    }

    // Clears the timer when the component is removed
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    tick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <h1>{this.state.count}</h1>
        )
    }
}

export default IntervalClassCounter
