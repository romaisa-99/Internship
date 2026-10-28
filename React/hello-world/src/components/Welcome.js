//Working on the class component
// include two inports - react and componet from react

import React, { Component } from 'react'
//define and extends the class
// class Welcome  extends Component{
//     //class to become a react compnent, two steps are needed ( extend the compnent class from react and implement a render method tat returns null or some html)
//     render() { //method 
//     return <h1> Class Component </h1>}
// }
// export default Welcome 

//Props - basically we are accessing the props with 'this' key word
class Welcome extends Component{
    render() {
        return <h1> Welcome {this.props.name} </h1>
    }
}

export default Welcome