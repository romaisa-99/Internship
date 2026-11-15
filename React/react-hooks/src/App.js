import React from 'react';
import './App.css';
import ClassCount from './components/ClassCount'
import HooksCount from './components/HooksCount';
import HooksCountTwo from './components/HooksCountTwo'
import HooksCountThree from './components/HooksCountThree'
import HooksCountFour from './components/HooksCountFour';
import HookCounterOne from './components/HookCounterOne';
import ClassCounterOne from './components/ClassCounterOne'


function App() {
  return (
    <div className="App">
     {/* <ClassCount />  */}
     {/* <HooksCount /> */}
     {/* <HooksCountTwo /> */}
     {/* <HooksCountThree /> */}
     {/* <HooksCountFour /> */}
     <HookCounterOne />
     <ClassCounterOne />


    </div>
  );
}

export default App;
