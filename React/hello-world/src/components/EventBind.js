
import React, { Component } from 'react';

class EventBind extends Component {

  constructor(props) {
    super(props); //super is the parent class

    this.state = {
      message: 'Hello'
    };   
    // this.clickHandler = this.clickHandler.bind(this) 
  }

  
//Defining the method clickHandler() 
  // clickHandler() {
  //   this.setState({
  //     message: 'Goodbye!'
  //   });
  // }

  clickHandler = () => {
    this.setState({
      message: 'Goodbyeee!!'
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>

        {/* <button onClick={this.clickHandler.bind(this)}> */}
        {/* An arrow function, empty parenthesis and event handler 
        Also, remember th this.clickHandler is calling the function and returning the value*/}
        {/* <button onClick={ () => this.clickHandler() }>Click</button> */}
        {/* This is th 3rd approach and here we bind in the constructor and and call it in the onclick */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
