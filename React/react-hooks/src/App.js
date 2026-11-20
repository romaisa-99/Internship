import React from 'react';
import './App.css';
import UserForm from './components/UserForm';
// import CounterOnee from './components/CounterOnee';
// import CounterTwoo from './components/CounterTwoo';
// import ClassTimer from './components/ClassTimer';
// import HookTimer from './components/HookTimer';
// import FocusInput from './components/FocusInput';
// import DataFetchingTwo from './components/DataFetchingTwo';
// import ClassCount from './components/ClassCount'
// import HooksCount from './components/HooksCount';
// import HooksCountTwo from './components/HooksCountTwo'
// import HooksCountThree from './components/HooksCountThree'
// import HooksCountFour from './components/HooksCountFour';
// import HookCounterOne from './components/HookCounterOne';
// import ClassCounterOne from './components/ClassCounterOne'
// import ClassMouse from './components/ClassMouse';
// import HookMouse from './components/HookMouse';
// import MouseContainer from './components/MouseContainer';
// import IntervalClassCounter from './components/IntervalClassCounter';
// import IntervalHookCounter from './components/IntervalHookCounter';
// import DataFetching from './components/DataFetching';
// import ComponentC from './components/ComponentC';
// import CounterOne from './components/CounterOne';
// import CounterTwo from './components/CounterTwo';
// import CounterThree from './components/CounterThree';
// import ComponentA from './components/ComponentA'
// import ComponentB from './components/ComponentB';
// import ComponentCc from './components/ComponentCc';
// import { useReducer } from 'react';
// import ParentComponent from './components/ParentComponent'
// import Counter from './components/Counter';

// export const CountContext = React.createContext()
// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()

// const initialState = 0
// const reducer = (state, action) => {
//     switch (action) {
//         case 'increment':
//             return state + 1

//         case 'decrement':
//             return state - 1

//         case 'reset':
//             return initialState

//         default:
//             return state
//     }
// }

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState)
  return (
    // <CountContext.Provider value = {{countState: count,  countDispatch: dispatch}}> 
    <div className="App">
      <UserForm />
      {/* <CounterOnee /> */}
      {/* <CounterTwoo /> */}
      {/* <HookTimer /> */}
      {/* <ClassTimer /> */}
      {/* <FocusInput /> */}
      {/* <Counter /> */}
      {/* <ParentComponent /> */}
      {/* Count - {count} */}
     {/* <ClassCount />  */}
     {/* <HooksCount /> */}
     {/* <HooksCountTwo /> */}
     {/* <HooksCountThree /> */}
     {/* <HooksCountFour /> */}
     {/* <HookCounterOne /> */}
     {/* <ClassCounterOne /> */}
     {/* <ClassMouse /> */}
     {/* <HookMouse /> */}
     {/* <MouseContainer />  */}
     {/* <IntervalClassCounter/> */}
     {/* <IntervalHookCounter /> */}
     {/* <DataFetching /> */}
     {/* <UserContext.Provider value={'Romaisa'}> Component C will be th child to this provider for whci we need to provide a conext value i.e username = romaisa */}
    {/* <ChannelContext.Provider value={'CodeEvolution'}> 
        <ComponentC/>
      </ChannelContext.Provider>                             
     </UserContext.Provider>
      */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}
      {/* <ComponentA />
      <ComponentB/>
      <ComponentCc /> */}
      {/* <DataFetchingTwo />  */}
    </div>
    // </CountContext.Provider>
  );
}

export default App;
