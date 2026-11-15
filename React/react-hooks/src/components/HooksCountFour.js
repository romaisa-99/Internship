import React, {useState} from 'react'

function HooksCountFour() {
    //1. destructuring items and setItemsn from useSate and the default value is the empty array.
    const [items, setItems] = useState([])

    //7. defining the add item function
    const addItem = () => {
        //8. In the function we call the set items setter function (setItems)
        //9. now we need to pass in the valu to set for the items array. 
        //10. Since the setter function doesn't automatically add the item to the end of the list we nee to handle this manually using the spread opearator 
        //11. so the argument to set items will be an  arrty and forst we spread the items  array and then we push a new object
        //12. for the new object the id is going to be items.length and the value is going to be a random number between 1 and 10N
        setItems([ ...items, {
            id: items.length, 
            value: Math.floor(Math.random() *10) +1}])
    }

  return (
    <div>
        {/* 5. A button to add the items in the browsers
        6. and onClick we are going to call a function add item */}
    <button onClick={addItem}> Click here to add a Number </button> 
    {/* 2. Rendering the items in the JSX in a ul tag */}
    <ul>
        {/* 3. we are going to get each item and then render a list item  */}
        {items.map(item => (
        // 4. the key is going to be item.id and we render the items value
            <li key={item.id} > {item.value} </li>
        ))}
        </ul> 
    </div>
  )
}

export default HooksCountFour
