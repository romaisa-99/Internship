import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            parentName: 'Parent'
        }

        //Bonding withing the constructor
        this.greetParent= this.greetParent.bind(this)
    }

   //1. define the method 
    greetParent(childName) {
        alert (`Hello ${this.state.parentName} from ${childName}`)
    }

  render() { //Now including the child component in the render method
    return (
      <div>
        {/* //2. passing the method as a prop to the child component */}
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    )
  }
}

export default ParentComponent
