import React, { Component } from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log('Button Clicked')
    }
    return (
        <div>
            {/* onlick here we pass the function as event haandler, why we did not addded the parenthsei because it will make it the function call but we do not want that,therefore we do not use the parenthesis. */}
             <button onClick={clickHandler}> Click Here </button>
        </div>
    )
}

export default FunctionClick