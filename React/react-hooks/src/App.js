import React from 'react';
import './App.css';
import ClassCount from './components/ClassCount'
import HooksCount from './components/HooksCount';
import HooksCountTwo from './components/HooksCountTwo'
import HooksCountThree from './components/HooksCountThree'
import HooksCountFour from './components/HooksCountFour';
import HookCounterOne from './components/HookCounterOne';
import ClassCounterOne from './components/ClassCounterOne'
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
function App() {
  return (
    <div className="App">
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
     <UserContext.Provider value={'Romaisa'}>
      {/* Component C will be th child to this provider 
      for whci we need to provide a conext value i.e username = romaisa*/}
      <ChannelContext.Provider value={'CodeEvolution'}> 
        <ComponentC/>
      </ChannelContext.Provider>                             
     </UserContext.Provider>
     


    </div>
  );
}

export default App;
