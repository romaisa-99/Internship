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
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import InLine from './components/InLine';
import './myStyle.css' //for css file only
import styles from './mystyle.module.css' //for module.css
import Form from './components/Form'
import LifeCycleA from './components/LifeCycleA'
import FragmentsDemo from './components/FragmentsDemo'
import Table from './components/Table'
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';

class App extends Component{
  render(){
    return (
    <div id="rom">
      <ErrorBoundary > <Hero heroName='Batman'/> </ErrorBoundary>
      <ErrorBoundary ><Hero heroName='Superman'/> </ErrorBoundary>
      <ErrorBoundary ><Hero heroName='Joker'/> </ErrorBoundary>
      
      {/* <PortalDemo /> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <Table /> */}
      {/* <FragmentsDemo /> */}
      {/* <LifeCycleA /> */}
      {/* <Form /> */}
      {/* For CSS Styling 
       <h1 className = 'error'> Error </h1>
      <h1 className = {styles.success}> Success </h1>*/}
      {/* <InLine /> */}
      {/* <StyleSheet primary={true}/> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
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

