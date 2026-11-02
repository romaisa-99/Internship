import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor (props){
        super(props)
        this.state ={
            // isLoggedIn: true
            isLoggedIn: false
        }
    }

    render(){
        //Conditional Rendering - Approach 1 - if/else
        // if (this.state.isLoggedIn){
        //     return <div> Welcome Natasha </div>
        // }
        // else {
        //     return <div> Please sign in </div>
        // }

        // //Conditional Rendering - Approach 2 - Element Variable
        // let message;
        // if (this.state.isLoggedIn){
        //     message = <div> Welcome Natasha </div>
        // }
        // else {
        //     message = <div> Please sign in </div>
        // }
        // return <div> {message} </div>

        //Conditional Rendering - Approach 3 - Ternary Conditional Operator
        // return this.state.isLoggedIn ? (
        //     <div> Welcome Natasha </div>
        // ) : (
        //     <div> Please sign in </div>
        // )

        //Conditional Rendering - Approach 4 - Short Circuit Operator
        return this.state.isLoggedIn && <div> Welcome Natasha </div>
    }
}

export default UserGreeting