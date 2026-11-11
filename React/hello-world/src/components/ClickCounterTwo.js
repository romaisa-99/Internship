import React, { Component } from 'react'

class ClickCounterTwo extends Component {

  render() {
    const {count, incrementCount} = this.props
    return (
      <button onClick = {incrementCount}>
        Clcked {count} Timess
      </button >
    )
  }
}

export default ClickCounterTwo
