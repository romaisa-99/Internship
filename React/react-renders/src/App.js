import './App.css';
import { ChildOne } from './components/Optimization/ChildOne';
import { ParentOne } from './components/Optimization/ParentOne';
// import { ArrayUseReducer } from './components/Immutable State/ArrayUseReducer';
// import { ArrayUseState } from './components/Immutable State/ArrayUseState';
// import { ObjectUseReducer } from './components/Immutable State/ObjectUseReducer';
// import { ObjectUseState } from './components/Immutable State/ObjectUseSate';
// import { UseReducer } from './components/UseState/UseReducer/UseReducer';
// import { Parent } from './components/Parent Child/Parent';



function App() {
  return (
    <div className="App">
      <ParentOne > 
        <ChildOne> </ChildOne>  
      </ParentOne>      
    {/* <Parent / > */}
    {/* <UseState /> */} 
    {/* <UseReducer /> */}
    {/* <ArrayUseReducer /> */}
    {/* <ArrayUseState /> */}
    {/* <ObjectUseState /> */}
    {/* <ObjectUseReducer/> */}
    </div>
  );
}

export default App;
