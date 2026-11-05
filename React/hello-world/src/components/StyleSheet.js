import React from 'react'
import './MyStyle.css'

//Simple way to render the text in the browser.
// function StyleSheet() {
//   return (
//     <div>
//       <h1 className = 'primary'> This is Lesson about StyleSheets.  </h1>
//     </div>
//   )
// }

// // Render the text in the browser based on the props passed to the component. Conditions applied.
// function StyleSheet(props) {
//     let className = props.primary ? 'primary' : ''
//   return (
//     <div> 
//         {/* The className varaiable is assignd as a value to the className attribute */}
//       <h1 className = {className}> This is Lesson about StyleSheets.  </h1>
//     </div>
//   )
// }

//Specifying multiple classes usimg the template literals ($, ``)
function StyleSheet(props) {
    let className = props.primary ? 'primary' : ''
  return (
    <div> 
      <h1 className = {'${className} font-xl'}> This is Lesson about StyleSheets.  </h1>
    </div>
  )
}
export default StyleSheet
