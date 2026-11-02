import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet' // we can ommit the .js extension
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';

class App extends Component{
  render(){
    return (
    <div id="rom">
      <UserGreeting />
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <ClassClick> </ClassClick> */}
      {/* <FunctionClick />  */}
      {/* <Counter /> */}
      {/* <Message /> */}
      { /* to include Greet component in the app we simply specify the coponemt as a custom HTML tag */}
       {/* <Greet name = "XYZ"> This is Children Props </Greet> */}
      {/* <Greet name = "Tasha" />
      <Greet name = "Maisa" /> */}
      {/* <Welcome name ="Tasha"/>
      <Welcome name ="Maisa"/> */}

      {/* if not content we will use self-closing tags 
      <Greet / > */}
      {/* <Hello> </Hello> */}
      
    </div>
  );
  }
}

export default App;

