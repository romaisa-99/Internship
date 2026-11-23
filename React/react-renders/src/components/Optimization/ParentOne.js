import React, { useState } from 'react'

export const ParentOne = ({children}) => { //here we destructure children fom props and add it in th jsx
  const [count, setCount] = useState(0)

  console.log('ParentOne Render')
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
      {children}
    </div>
  )
}