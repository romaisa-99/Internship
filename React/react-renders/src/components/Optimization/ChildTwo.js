import React from 'react'

export const ChildTwo = ({ name }) => {
  console.log('ChildTwo Render')
  return <div>ChildTwo component - {name}</div>
}

//add an addtional export 
export const MemoizedChildTwo = React.memo(ChildTwo)