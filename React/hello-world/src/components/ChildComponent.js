import React from 'react'

//Created a functional component called ChildComponent
function ChildComponent(props) { //passing props as a parameter to the function so that we can access the props.
  return (
    <div>
     {/* <button onClick={props.greetHandler}> Greet Parent </button>  */}
     {/* passing any number of parememter from child to parent using arrow func, here we passed the parameter named Child that will be rnedered in the borwser */}
     {/* 3. Access the method using the props Object and pass the parameter usung => */}
     <button onClick={() => {props.greetHandler('Child')}}> Greet Parent </button> 
    </div>
  )
}

export default ChildComponent
