import React from 'react'

// //Creating new function
// function Greet(){ // Now we will create a functional component
//     return<h2> Welcome to the world of REACT! </h2>
// }
// //The greet compnent is not connect with rest of our application so we have to export Greet function from greet .js an import it into app.js then included inthe app component 
// export default Greet 

// Rewriting the functional components with the ES6 arrow function syntax
// var Greet = () => <h1>Hello, Welcome to React</h1>;
// export default Greet 

//Now we are sending soe prop to the greet component and how do we retrive this values o=in the greet cmpobnemt here is what we do it:
// const Greet = (props) => {
// console.log(props)
// return(
//     <div>
//     <h1> 
//         Hello {props.name } 
//          </h1>
//     {props.children}
//     </div>
// )
// } 


//Destructuring propes in the functional components
//Way 1 - destructing in the parameter
// const Greet = ({name}) => {
//     return (
//         <div>
//             <h1>
//                 Hello {name}
//             </h1>
//         </div>
//     )
// }

//Way 2 detcuting it in the function body
const Greet = props => { // rememeber propes is the parameter here
    // in the body
    const {name} = props 
    return (
        <div>
            <h1>
                Hello {name}
            </h1>
        </div>
    )
}
export default Greet