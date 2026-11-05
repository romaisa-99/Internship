import React from 'react'

//Create an object
const heading ={
    color: 'purple',
    fontSize: '40px',
    fontstyle:'italic'
}

function InLine() {
  return (
    <div>
      <h1 style={heading}> InLine </h1>
    </div>
  )
}

export default InLine
