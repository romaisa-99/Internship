import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

// FOR THE TOPIC - MOUNTING THE LIFECYCLE METHODS
// class LifeCycleA extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             name: 'Aleena'
//         }
//         console.log('LifeCycleA constructor')
//     }

//     static getDerivedStateFromProps(props, state){
//         console.log('LifeCycleA getDerivedStateFromProps')
//         return null
//     }

//     componentDidMount(){
//         console.log('LifeCycleA componentDidMount')
//     }

//   render() {
//     console.log('LifeCycleA render')
//     return (
//     <div> 
//         <div>LifeCycleA </div>
//         {/* Adding the LifeCycleB component */}
//         <LifeCycleB />
//     </div>)
//   }
// }

//FOR THE TOPIC - UPDATING THE LIFECYCLE METHODS
class LifeCycleA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Aleena'
        }
        console.log('LifeCycleA constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }   

    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'Codevolution'
        })
    }

  render() {
    console.log('LifeCycleA render')
    return (
    <div> 
        <div>LifeCycleA </div>
        <button onClick ={this.changeState}> Change State </button>
        {/* Adding the LifeCycleB component */}
        <LifeCycleB />
    </div>)
  }
}

export default LifeCycleA