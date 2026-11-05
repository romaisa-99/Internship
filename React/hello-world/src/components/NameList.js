import React from 'react'
import Person from './Person'

function NameList() {
    //1. One way to render a list is to use the map function to iterate over an array and return a JSX element for each item in the array. In this case, we are using the map function to iterate over the names array and return an h2 element for each name. The key prop is used to give each element a unique identifier, which helps React keep track of which elements have changed when the list is updated.
    // const names = ['Bruce', 'Clark', 'Diana']
    //  return (
    //     <div> {names.map( name=> <h2> {name} </h2> )} </div>
    //  )

    //2. Second way is to create a consts in the function before return method and call the variable in the return 
    // const names = ['Bruce', 'Clark', 'Diana']
    // const nameList = names.map(name => <h2> {name} </h2>)
    // return <div>{nameList} </div>
   
    //working with array but with the array conataing the array of persons
    // const persons = [
    //     { id: 1, name: 'Bruce', age: 30, skill: 'React'},
    //     { id: 2, name: 'Clark', age: 25, skill: 'Angular'},
    //     { id: 3, name: 'Diana', age: 28, skill: 'Vue'},
    // ]
    // const personList = persons.map(person => <Person person={person}> </Person>) 

    //It is still not perfect therefore we will be sing the key value for it 
    // const personList = persons.map( person => <Person key = {person.id} person={person}> </Person>)     
    // const personList = persons.map( person => <Person key = {person.id} person={person}> </Person>)  
    // return <div>{personList} </div>

    const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
    const nameList= names.map((name, index) => <h2 key = {index}> {index}: {name} </h2>)
    return <div> {nameList} </div>




    
}

export default NameList
