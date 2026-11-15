import React, {useState} from 'react'

function HooksCountThree() {
    const [name,setName] = useState ({firstName: '', lastName: ''})
  return (
    <form>
      <input 
      tpye='text'
      value={name.firstName}
      onChange={ e => setName({ ...name, firstName: e.target.value})}
      />
      
      <input 
      tpye='text'
      value={name.lastName}
      onChange={ e => setName({ ...name, lastName: e.target.value})}
      />
      <h2> First Name: {name.firstName}</h2>
      <h2> Last Name: {name.lastName}</h2>
    </form>
  )
}

export default HooksCountThree
