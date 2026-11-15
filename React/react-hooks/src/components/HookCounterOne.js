import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0)

   /*useEffect is a function and in this hook, we pass in a parameter 
    and this paramerter is a function ehcih gets executed after every 
    render of the component so we will pass in the araow function which updates the document title*/

    useEffect (() => {
        document.title = `You clicked ${count} times`
    })
    
  return (
    <div>
      <button onClick={() => setCount(count + 1) }> Click {count} times</button>
    </div>
  )
}

export default HookCounterOne
