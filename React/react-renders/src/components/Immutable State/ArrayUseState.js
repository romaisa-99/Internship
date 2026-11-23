import React, { useState } from 'react'

//creat a nwe variable called 'initState'
const initState = ['Bruce', 'Wayne']

export const ArrayUseState = () => {
  const [persons, setPersons] = useState(initState)
  const handleClick = () => {
    const newPersons = [...persons]
    newPersons.push('Clark')
    newPersons.push('Kent')
    setPersons(newPersons)
  }
  console.log('ArrayUseState Render')
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {/* Within th button we rener the list of persons 
      so person.map, we get the access to each person*/}
      {persons.map(person => (
        //And we simply renders the div tag where the dive has the attribute y and the value will beb perosn and its content will also be
        <div key={person}> {person} </div>
      ))}
    </div>
  )
}