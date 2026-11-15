import React from 'react'
import {useState} from 'react'

function HooksCount() {
    //This sturcture is called the ARRAY RESTURCTURING, a new feature in ES6.
    const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={}> You clicked the button {} times </button>
    </div>
  )
}

export default HooksCount
