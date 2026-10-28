// simple functionl component that renders the text inthe browser  
// this is the jsx version of functional component
import React from 'react'
// const Hello = () => {
// return (
//     <div className='dummy'>
//         <h1> Hello Javascript JXS</h1>
//     </div>
// )
// }
// export default Hello

//rewrite the compenent without useing the jsx, the react liob provide the create element method
// const Hello = () => {
// return React.createElement('div', null, React.createElement('h1', null, 'Hello JSX'))
// }
// export default Hello

const Hello = () => {
return React.createElement(
    'div', 
    {id: 'hello', className:'dummy'}, //This is basically he object of key value pairs
    React.createElement('h1', null, 'Hello JSX'))
}
export default Hello