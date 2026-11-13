import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'

// class ComponentE extends Component {
//   render() {
//     return 
//     <ComponentF />  
//   }
// }

class ComponentE extends Component {
//The context.type can be replced by one more approach.

static contextType = UserContext

  render() {
    return(
<div>
Component E context{this.context}
<ComponentF />
</div> 
    )
  }
}




// ComponentE.contextType = UserContext




export default ComponentE
